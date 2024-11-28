import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useAuth(); // Get token from context
  if (token && allowedRoles && allowedRoles.includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace />; // Redirect to login if no token found
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;
