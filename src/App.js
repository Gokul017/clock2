import React, { useState } from "react";
import "./styles.css";

const currTime = new Date().toLocaleTimeString();

export default function App() {
  const [timeNow, setTime] = useState(currTime);

  const refreshTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(refreshTime, 1000);

  return (
    <div className="App">
      <h1>{timeNow}</h1>
    </div>
  );
}
