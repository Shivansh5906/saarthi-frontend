import { useEffect, useState } from "react";
import api from "../api/apiClient";
import "./History.css";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const res = await api.get("/user/transactions");
        setTransactions(res.data);
      } catch (err) {
        console.log("Error fetching transactions:", err);
      }
    };
    loadTransactions();
  }, []);

  // ✅ PDF Download Function
 const downloadPdf = () => {
  const token = localStorage.getItem("token");
  window.open(`https://saarthi-bank-backend-production.up.railway.app/user/transactions/pdf?token=${token}`, "_blank");
};


  if (transactions.length === 0)
    return (
      <h2 style={{ textAlign: "center", marginTop: "60px", color: "#003366" }}>
        No Transactions Found
      </h2>
    );

  return (
    <div className="history-bg">
      <div className="history-container">

        {/* ✅ Header + Download Button */}
        <div className="history-header">
          <h2>📜 Transaction History</h2>
          <button className="download-btn" onClick={downloadPdf}>
            ⬇️ Download Statement
          </button>
        </div>

        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount (₹)</th>
                <th>Details</th>
                <th>Date & Time</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>
                    <span
                      className={
                        tx.type === "DEPOSIT"
                          ? "badge badge-deposit"
                          : tx.type === "WITHDRAW"
                          ? "badge badge-withdraw"
                          : "badge badge-transfer"
                      }
                    >
                      {tx.type}
                    </span>
                  </td>

                  <td>₹ {tx.amount}</td>
                  <td>{tx.details || "-"}</td>
                  <td>{new Date(tx.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
