import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the Auth context

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useAuth(); // Get token from context
  if (token && allowedRoles && allowedRoles.includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace />; // Redirect to login if no token found
};

export default ProtectedRoute;
