import { useState } from "react";
import api from "../api/apiClient";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    const signupData = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    try {
      const response = await api.post("/auth/signup", signupData);
      alert("✅ Account Created Successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("❌ Signup Failed. Email may already be registered.");
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">

        <h1 className="signup-title">SAARTHI BANK</h1>
        <p className="signup-subtitle">Create Your Secure Account</p>

        <form className="signup-form" onSubmit={handleSignup}>
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            required
          />

          <button className="signup-btn" type="submit">Create Account</button>
        </form>

        <div className="signup-links">
          <Link to="/login">Already have an account?</Link>
        </div>

      </div>
    </div>
  );
}
