import { useEffect, useState } from "react";
import api from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

import depositImg from "../assets/deposit.png";
import withdrawImg from "../assets/withdraw-money.svg"; // ✅ Added withdraw icon
import transferImg from "../assets/transfer.png";

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
      {/* Sidebar */}
      <Sidebar />

      {/* Blue Navbar */}
      <div className="navbar">
        <h1>Welcome {user.name}</h1>
      </div>

      <div className="dashboard-content">
        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-label">Total Balance</div>
          <div className="balance-amount">₹ {user.balance.toLocaleString()}</div>
          <div className="balance-number">Savings • {user.accountNumber}</div>
        </div>

        {/* Feature Buttons */}
        <div className="feature-grid">

          {/* DEPOSIT BUTTON */}
          <div className="feature-card" onClick={() => navigate("/deposit")}>
            <img src={depositImg} alt="Deposit" className="feature-icon" />
            <h3>Deposit Money</h3>
          </div>

          {/* WITHDRAW BUTTON */}
          <div className="feature-card" onClick={() => navigate("/withdraw")}>
            <img src={withdrawImg} alt="Withdraw" className="feature-icon" />
            <h3>Withdraw Money</h3>
          </div>
<div className="feature-card" onClick={() => navigate("/transfer")}>
  <img src={transferImg} alt="Transfer" className="feature-icon" />
  <h3>Transfer Funds</h3>
</div>


        </div>
      </div>
    </div>
  );
}
