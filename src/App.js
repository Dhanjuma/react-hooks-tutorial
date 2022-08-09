import React, { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
// import { Hello } from "./hello";
import { useForm } from "./useForm";

const App = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="App-header">
      <div>{loading ? "Loading ..." : data}</div>
      <div>
        Count: {count}
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          +
        </button>
      </div>
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};
export default App;
