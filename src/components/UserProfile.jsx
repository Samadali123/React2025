// import React from 'react'

// const UserProfile = ({name}) => {
//   return (
//         <h2>Welcome, {name}!</h2>
//   );
// }

// export default UserProfile





import React from "react";

const UserProfile = ({ name }) => {
  return (
    <div className="flex justify-center items-center h-32 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-400">
        👋 Welcome, {name}!
      </h2>
    </div>
  );
};

export default UserProfile;

