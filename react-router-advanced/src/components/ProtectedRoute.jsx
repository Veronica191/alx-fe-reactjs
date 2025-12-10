import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";   // ✅ import hook

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();           // ✅ use the hook

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}
