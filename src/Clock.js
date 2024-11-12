// src/Clock.js

import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className="clock">
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
