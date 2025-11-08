import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/apiClient";
import "./Deposit.css";

export default function Deposit() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const handleDeposit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        "/user/deposit",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      alert(`₹${amount} deposited successfully! New Balance: ₹${res.data}`);
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Something went wrong!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="deposit-bg">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="nav-left">
          <Link to="/dashboard" className="logo">SAARTHI BANK</Link>
        </div>

        <div className="nav-center">
          <ul className="nav-links">
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/history">Transaction History</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>

      </nav>

      {/* GLASS FORM CARD */}
      <form className="deposit-card" onSubmit={handleDeposit}>
        <h2>Deposit Money</h2>

        <label>Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="deposit-btn" type="submit">Deposit</button>
      </form>
    </div>
  );
}
