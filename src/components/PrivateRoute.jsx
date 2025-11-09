import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // ✅ token read

  if (!token) {
    return <Navigate to="/login" replace />; // ✅ correct redirect
  }

  return children; // ✅ allow dashboard
}
