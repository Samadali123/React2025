// import React from 'react'

// const Profile = ({username, age}) => {
//   return (
//     <div>
//       <h2>Name: {username}</h2>
//       <p>Age: {age}</p>
//     </div>
//   )
// }

// export default Profile



import React from "react";

const Profile = ({ username, age }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-80 mx-auto text-center border border-gray-700">
      <h2 className="text-2xl font-bold text-blue-400">👤 Profile</h2>
      <p className="text-lg mt-3">
        <span className="text-gray-400">Name:</span> 
        <span className="text-green-400 font-semibold"> {username}</span>
      </p>
      <p className="text-lg mt-1">
        <span className="text-gray-400">Age:</span> 
        <span className="text-yellow-400 font-semibold"> {age}</span>
      </p>
    </div>
  );
};

export default Profile;
