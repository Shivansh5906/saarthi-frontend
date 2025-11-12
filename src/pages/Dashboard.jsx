import { useEffect, useState } from "react";
import api from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
import depositImg from "../assets/deposit.png";

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
  }, [navigate]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="dashboard-layout">
      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Blue Navbar */}
      <div className="navbar">
        <h1>Welcome, {user.name} 👋</h1>
      </div>

      <div className="dashboard-content">
        {/* Glass Balance Card */}
        <div className="balance-card">
          <div className="balance-label">Total Balance</div>
          <div className="balance-amount">
            ₹ {user.balance.toLocaleString()}
          </div>
          <div className="balance-number">Savings • {user.accountNumber}</div>
        </div>

        {/* Action Buttons */}
        <div className="feature-grid">
          <div className="feature-card" onClick={() => navigate("/deposit")}>
            <img src={depositImg} alt="Deposit" />
            <h3>Deposit Money</h3>
          </div>

          <div className="feature-card" onClick={() => navigate("/withdraw")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="Withdraw"
            />
            <h3>Withdraw Cash</h3>
          </div>

          <div className="feature-card" onClick={() => navigate("/transfer")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2980/2980283.png"
              alt="Transfer"
            />
            <h3>Transfer Funds</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
