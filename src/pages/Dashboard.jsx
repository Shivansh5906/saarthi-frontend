import { useEffect, useState } from "react";
import api from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user/me");
        setUser(response.data);
      } catch (err) {
        console.log("Error loading user", err);
        navigate("/login");
      }
    };
    fetchUser();
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-label">Total Balance</div>
          <div className="balance-amount">₹ {user.balance.toLocaleString()}</div>

          <div className="balance-number">
            Savings • {user.accountNumber}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-grid">
          <button className="action-item" onClick={() => navigate("/deposit")}>➕ Deposit</button>
          <button className="action-item" onClick={() => navigate("/withdraw")}>➖ Withdraw</button>
          <button className="action-item" onClick={() => navigate("/transfer")}>💸 Transfer</button>
        </div>

      </div>
    </div>
  );
}
