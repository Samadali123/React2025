// import React from 'react'

// const Props = ({name}) => {
//   return (
//     <div>Your props name is : {name}</div>
//   )
// }

// export default Props



import React from "react";

const Props = ({ name }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md w-80 mx-auto text-center">
      <h2 className="text-lg font-semibold text-blue-400">🔹 Prop Received</h2>
      <p className="text-xl mt-2 bg-gray-700 px-4 py-2 rounded-lg shadow">
        Your prop name is: <span className="text-green-400 font-bold">{name}</span>
      </p>
    </div>
  );
};

export default Props;
