// use Memo used for optimization in rerenderss the same unnecessary data again nd again so we memoize that fucntion for optimization.

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
    <div>
      <h2>Factorial: {factorial}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
    </div>
  );
}

export default ExpensiveCalculation;
