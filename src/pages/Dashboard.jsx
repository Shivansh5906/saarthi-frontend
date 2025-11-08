import { useEffect, useState } from "react";
import api from "../api/apiClient";
import "./Dashboard.css";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="dashboard-bg">
<nav className="navbar">

  <div className="nav-left">
    <Link to="/" className="logo">SAARTHI BANK</Link>
  </div>

  <div className="nav-center">
    <ul className="nav-links">
     
      <li><Link to="/history">Transaction History</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </div>

 

</nav>

   

    
       

      {/* ✅ WELCOME BOX */}
      <div className="welcome-box">
        <h1>Welcome {user.name}</h1>
      </div>

      {/* ACCOUNT CARD */}
      <div className="account-card">
        <h3>Account Balance</h3>
        <h1>₹ {user.balance.toLocaleString()}</h1>
        <p>Savings Account • {user.accountNumber}</p>

        <div className="actions">
          <button className="action-btn" onClick={() => navigate("/deposit")}>Deposit</button>
          <button className="action-btn" onClick={() => navigate("/withdraw")}>Withdraw</button>
          <button className="action-btn" onClick={() => navigate("/transfer")}>Transfer</button>
        </div>
      </div>
    </div>
  );
}
