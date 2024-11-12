import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS for styling

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      {/* Clock display */}
      <div className="clock">
        <div className="time">{time}</div>
        <div className="brand-name">Sophie And Dodo</div>
      </div>
      {/* Powered by text with fade effect */}
      <div className="powered-by">Powered by Sophie And Dodo</div>
    </div>
  );
};

export default App;
