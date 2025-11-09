import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/apiClient";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email: form.email.trim().toLowerCase(),   // ✅ email normalize
        password: form.password
      });

      const token = response.data; // ✅ backend returns token only

      localStorage.setItem("token", `Bearer ${token}`); // ✅ store correctly

      alert("✅ Login Successful!");
      navigate("/dashboard");

    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Incorrect Email or Password!"));
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">

        <h1 className="bank-title">SAARTHI BANK</h1>
        <p className="bank-subtitle">Secure Digital Banking</p>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="login-submit" type="submit">Login</button>
        </form>

        <div className="login-links">
          <Link to="/signup">Create Account</Link>
        </div>

      </div>
    </div>
  );
}
