import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/apiClient";
import "./Transfer.css";

export default function Transfer() {

  const [form, setForm] = useState({
    receiverAccountNumber: "",
    amount: ""
  });

  const navigate = useNavigate();

  const handleTransfer = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/user/transfer",
        form,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      );

      alert(`₹${form.amount} transferred successfully!`);
      navigate("/dashboard");

    } catch (err) {
      alert("⚠️ Transaction Failed! Check account number or balance.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="transfer-bg">

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

      {/* GLASS TRANSFER CARD */}
      <form className="transfer-card" onSubmit={handleTransfer}>
        <h2>Transfer Money</h2>

        <label>Receiver Account Number</label>
        <input
          type="text"
          required
          onChange={(e) => setForm({ ...form, receiverAccountNumber: e.target.value })}
        />

        <label>Amount (₹)</label>
        <input
          type="number"
          required
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <button className="transfer-btn" type="submit">Transfer</button>
      </form>

    </div>
  );
}
