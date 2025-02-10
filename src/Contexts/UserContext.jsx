import React, { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

// Create Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in

  // Function to log in
  const login = (userData) => {
    setUser(userData); // Set user data when logged in
  };

  // Function to log out
  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
