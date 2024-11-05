import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the Auth context

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useAuth(); // Get token from context
  console.log(role, allowedRoles);
  if (token && allowedRoles && allowedRoles.includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace />; // Redirect to login if no token found
};

export default ProtectedRoute;
