// import React, { useState, useEffect } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []); // Empty dependency array -> Runs only once

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Users;




import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
        User List
      </h2>
      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-700 p-3 rounded-md shadow-sm hover:bg-gray-600 transition duration-200"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
