import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";


export default function Sidebar() {
  const navigate = useNavigate(); 

  const menu = [
    { to: "/login", icon: "🏠", label: "Home" },
    

    { to: "/transactions", icon: "📄", label: "History" },
    { to: "/profile", icon: "👤", label: "Profile" },
  ];

 
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar desktop-sidebar">
        <div className="menu-item" onClick={() => navigate("/login")}>🏠</div>
        
        <div className="menu-item" onClick={() => navigate("/transaction")}>📄</div>
    
        <div className="menu-item" onClick={() => navigate("/profile")}>👤</div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="mobile-navbar">
        <div onClick={() => navigate("/home")}>🏠</div>
       <div onClick ={()=> navigate("/transaction")}>📄</div> 
      
    
        <div onClick={() => navigate("/profile")}>👤</div>
      </div>
    </>
  );
}