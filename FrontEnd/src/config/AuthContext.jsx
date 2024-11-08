import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes


// Create an Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token")); // Initialize state from localStorage

  const login = (newToken, newRole) => {
    setToken(newToken);
    setRole(newRole);
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is a React node and required
};

// Custom hook for using Auth context
export const useAuth = () => useContext(AuthContext);
