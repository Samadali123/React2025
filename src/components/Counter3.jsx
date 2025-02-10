// import React, { useState } from "react";

// function Counter3() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increase</button>
//     </div>
//   );
// }

// export default Counter3;




import React, { useState } from "react";

function Counter3() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Count: {count}</h2>
        <button
          onClick={increment}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 shadow-md"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter3;
