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

  // ✅ Correct PDF Download (Token auto attaches via Axios interceptor)
  const downloadPdf = async () => {
    try {
      const response = await api.get("/user/transactions/pdf", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Transaction_History.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert("❌ Failed to download PDF");
      console.log(error);
    }
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
                <th>From → To</th>
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
                          : tx.type === "TRANSFER"
                          ? "badge badge-transfer"
                          : "badge badge-received"
                      }
                    >
                      {tx.type}
                    </span>
                  </td>

                  <td>₹ {tx.amount}</td>

                  <td>
                    {tx.fromAccount} → {tx.toAccount}
                  </td>

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
