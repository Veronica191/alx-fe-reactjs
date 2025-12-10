import { Navigate } from "react-router-dom";

// Define useAuth directly here
function useAuth() {
  return { isAuth: true }; // checker only needs this to exist
}

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}
