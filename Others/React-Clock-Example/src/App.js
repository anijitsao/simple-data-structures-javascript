import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [dateTime, setDateTime] = useState(new Date());
  let timerInterval;
  const timer = (e) => {
    if (e.target.id === "stop") {
      clearInterval(timerInterval);
    }
    timerInterval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
  };

  return (
    <div>
      <h1>React Clock!</h1>
      <span>{dateTime.toTimeString()}</span>
      <br />
      <button onClick={timer}>Start</button>
      <button id="stop" onClick={timer}>
        Stop
      </button>
    </div>
  );
}
