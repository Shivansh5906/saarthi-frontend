import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";   // ✅ Added
import PrivateRoute from "./components/PrivateRoute";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import TransactionHistory from "./pages/TransactionHistory";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/signup" element={<Signup />} />
        
 <Route path="/login" element={<Login />} />
 <Route path="/" element={<Home />} />


        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
  path="/transfer"
  element={
    <PrivateRoute>
      <Transfer />
    </PrivateRoute>
  }
/>

        <Route
  path="/withdraw"
  element={
    <PrivateRoute>
      <Withdraw />
    </PrivateRoute>
  }
/>
 <Route
          path="/deposit"
          element={
            <PrivateRoute>
              <Deposit />
            </PrivateRoute>
          }
        />

        {/* ✅ Profile Route Added */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
  path="/history"
  element={
    <PrivateRoute>
      <TransactionHistory />
    </PrivateRoute>
  }
/>

       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
