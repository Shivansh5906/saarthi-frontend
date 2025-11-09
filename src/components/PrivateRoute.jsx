import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // ✅ If token exists → allow dashboard
  if (token && token.startsWith("Bearer ")) {
    return children;
  }

  // ❌ No token → redirect to login
  return <Navigate to="/login" replace />;
}  