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
    <div className="sidebar">
     

      <ul className="sidebar-menu">
        {menu.map((item) => (
          <li key={item.to} className={pathname === item.to ? "active" : ""}>
            <Link to={item.to}>
              <span className="icon">{item.icon}</span>
            </Link>
            <span className="tooltip">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
