import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-bg">

      {/* ✅ NAVBAR */}
      <nav className="home-navbar">
        <Link to="/signup" className="nav-btn left">Create Account</Link>
        <h2 className="nav-title"></h2>
        <Link to="/login" className="nav-btn right">Login</Link>
      </nav>

      {/* ✅ GLASS TITLE BOX */}
      <div className="home-glass-box">
        <h1 className="bank-title">🏦 SAARTHI BANK</h1>
        <p className="bank-tagline">Your Trusted Partner in Digital Banking</p>
      </div>

      {/* ✅ SERVICES SECTION */}
      <div className="home-services">

        <div className="service-card">
          <h3>💰 Deposit Money</h3>
          <p>Instant secure deposits to your bank account.</p>
        </div>

        <div className="service-card">
          <h3>💸 Withdraw Funds</h3>
          <p>Withdraw anytime, anywhere with full security.</p>
        </div>

        <div className="service-card">
          <h3>🔁 Transfer Money</h3>
          <p>Send money safely in seconds.</p>
        </div>

        <div className="service-card">
          <h3>📜 View Statement</h3>
          <p>Track your transaction history in one place.</p>
        </div>

      </div>

    </div>
  );
}
