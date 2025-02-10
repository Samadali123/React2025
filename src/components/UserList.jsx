// function UserList({users}) {
    
  
//     return (
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>{user}</li>
//         ))}
//       </ul>
//     );
//   }
  
//   export default UserList;
  



import React from "react";

function UserList({ users }) {
  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">
        👤 User List
      </h2>
      <ul className="space-y-3">
        {users.map((user, index) => (
          <li
            key={index}
            className="bg-gray-700 p-3 rounded-md shadow-sm hover:bg-gray-600 transition duration-200"
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
