// // use Memo used for optimization in rerenderss the same unnecessary data again nd again so we memoize that fucntion for optimization.

// import React, { useState, useMemo } from "react";

// function ExpensiveCalculation() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(5);

//   // Correct factorial function
//   const calculateFactorial = (num) => {
//     console.log("Calculating Factorial...");
//     return num > 0 ? num * calculateFactorial(num - 1) : 1;
//   };

//   // Memoizing factorial result
//   const factorial = useMemo(() => calculateFactorial(number), [number]);

//   return (
//     <div>
//       <h2>Factorial: {factorial}</h2>
//       <button onClick={() => setNumber(number + 1)}>Increase Number</button>
//       <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
//     </div>
//   );
// }

// export default ExpensiveCalculation;





import React, { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Correct factorial function
  const calculateFactorial = (num) => {
    console.log("Calculating Factorial...");
    return num > 0 ? num * calculateFactorial(num - 1) : 1;
  };

  // Memoizing factorial result
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Factorial: {factorial}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => setNumber(number + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Increase Number
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          Increase Count ({count})
        </button>
      </div>
    </div>
  );
}

export default ExpensiveCalculation;
