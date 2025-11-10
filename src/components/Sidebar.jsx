import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { to: "/dashboard", icon: "🏠", label: "Home" },
    { to: "/deposit", icon: "➕", label: "Deposit" },
    { to: "/withdraw", icon: "➖", label: "Withdraw" },
    { to: "/transfer", icon: "💸", label: "Transfer" },
    { to: "/transactions", icon: "📄", label: "History" },
    { to: "/profile", icon: "👤", label: "Profile" },
  ];

 
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar desktop-sidebar">
        <div className="menu-item" onClick={() => navigate("/dashboard")}>🏠</div>
        <div className="menu-item" onClick={() => navigate("/deposit")}>➕</div>
        <div className="menu-item" onClick={() => navigate("/withdraw")}>➖</div>
        <div className="menu-item" onClick={() => navigate("/transfer")}>💸</div>
        <div className="menu-item" onClick={() => navigate("/profile")}>👤</div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="mobile-navbar">
        <div onClick={() => navigate("/dashboard")}>🏠</div>
        <div onClick={() => navigate("/deposit")}>➕</div>
        <div onClick={() => navigate("/withdraw")}>➖</div>
        <div onClick={() => navigate("/transfer")}>💸</div>
        <div onClick={() => navigate("/profile")}>👤</div>
      </div>
    </>
  );
}