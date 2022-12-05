import React from "react";
import "./style.css";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const value = useSelector((state) => {
    // console.log('state', state?.value);
    return state?.value;
  });

  const onClickHandler = (e) => {
    e.target.id === "decr"
      ? dispatch({ type: "DECREMENT" })
      : dispatch({ type: "INCREMENT" });
  };

  // console.log('State', value);
  const count = 0;

  return (
    <div>
      <h1>Basic React Redux example</h1>
      <p>Count {value}</p>
      <button onClick={onClickHandler}>Increment</button> &nbsp;
      <button id="decr" onClick={onClickHandler}>
        Decrement
      </button>
    </div>
  );
}
