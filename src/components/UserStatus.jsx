// import React from 'react'

// const UserStatus = ({isLoggedIn}) => {
//   return (
//     <>
//     return <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
//     </>
//   )
// }

// export default UserStatus


import React from "react";

const UserStatus = ({ isLoggedIn }) => {
  return (
    <div className="flex justify-center items-center min-h-[100px]">
      <h2
        className={`text-xl font-semibold px-4 py-2 rounded-md ${
          isLoggedIn ? "text-green-400" : "text-red-400"
        }`}
      >
        {isLoggedIn ? "✅ Welcome back!" : "❌ Please log in"}
      </h2>
    </div>
  );
};

export default UserStatus;
