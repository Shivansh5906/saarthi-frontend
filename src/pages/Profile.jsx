import { useEffect, useState } from "react";
import api from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/user/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setUser(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="profile-bg">   {/* ✅ BACKGROUND ADDED */}

      <div className="profile-box">
        <h2>👤 Profile Details</h2>

        <div className="profile-info">
          <p><span>Name:</span> {user.name}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Account No:</span> {user.accountNumber}</p>
          <p><span>Balance:</span> ₹{user.balance}</p>
          <p><span>Branch:</span> Lucknow</p>
        </div>

        <button className="logout-profile-btn" onClick={logout}>Logout</button>

      </div>
    </div>
  );
}
