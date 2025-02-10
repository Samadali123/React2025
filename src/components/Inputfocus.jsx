// import React, { useRef } from "react";

// function InputFocus() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus(); // Focus input field
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

// export default InputFocus;




import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Focus input field
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md mx-auto">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleClick}
        className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
      >
        🎯 Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
