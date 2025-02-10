// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     console.log("Timer Started!");

//     // Start a timer that updates time every second
//     const intervalId = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     // Cleanup function to clear the interval when component unmounts
//     return () => {
//       console.log("Timer Stopped!");
//       clearInterval(intervalId);
//     };
//   }, []); // Runs only once when component mounts

//   return (
//     <div>
//       <h2>Time: {time}</h2>
//     </div>
//   );
// }

// export default Timer;




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
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-lg shadow-lg w-60 mx-auto">
      <h2 className="text-3xl font-bold text-blue-400">⏳ Timer</h2>
      <p className="text-xl font-semibold mt-2 bg-gray-700 px-4 py-2 rounded-lg shadow-md">
        ⏰ Time: {time}s
      </p>
    </div>
  );
}

export default Timer;
