import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";


const Home = () => {
  const { user, login, logout } = useContext(UserContext); // Access context
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        {user ? (
          <>
            <h2 className="text-2xl font-bold">Welcome, {user.name}!</h2>
            <button
              onClick={logout}
              className="px-6 py-2 mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Please Log In</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            <button
              onClick={() => login({ name: username })}
              className="px-6 py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
