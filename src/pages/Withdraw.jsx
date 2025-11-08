import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/apiClient";
import "./Withdraw.css";

export default function Withdraw() {

  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleWithdraw = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/user/withdraw",
        { amount },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      );

      alert(`₹${amount} withdrawn successfully! New Balance: ₹${res.data}`);
      navigate("/dashboard");

    } catch (err) {
      alert("⚠️ Insufficient Balance / Something went wrong.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="withdraw-bg">

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

      {/* GLASS WITHDRAW CARD */}
      <form className="withdraw-card" onSubmit={handleWithdraw}>
        <h2>Withdraw Money</h2>

        <label>Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter Amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="withdraw-btn" type="submit">Withdraw</button>
      </form>

    </div>
  );
}
