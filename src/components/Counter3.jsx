import React, { useState } from "react";

function Counter3() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter3;
