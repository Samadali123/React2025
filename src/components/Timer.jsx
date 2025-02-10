import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Timer Started!");

    // Start a timer that updates time every second
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      console.log("Timer Stopped!");
      clearInterval(intervalId);
    };
  }, []); // Runs only once when component mounts

  return (
    <div>
      <h2>Time: {time}</h2>
    </div>
  );
}

export default Timer;
