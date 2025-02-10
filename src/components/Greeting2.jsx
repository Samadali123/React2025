// import React from 'react'
// import {SayName,name } from './Es6'
// const Greeting2 = () => {
//   return (
//     <div>
//       <SayName/> 
//         `{name}`
//       </div>
//   )
// }

// export default Greeting2



import React from "react";
import { SayName, name } from "./Es6";

const Greeting2 = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md mx-auto text-center">
      <SayName />
      <p className="mt-2 text-lg font-semibold text-blue-400">{name}</p>
    </div>
  );
};

export default Greeting2;
