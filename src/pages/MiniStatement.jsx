import { useEffect, useState } from "react";
import api from "../api/apiClient";

export default function MiniStatement() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/transaction/mini-statement");
      setTransactions(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="statement">
      <h2>Mini Statement</h2>
      <table>
        <thead>
          <tr><th>Date</th><th>Type</th><th>Amount</th></tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i}>
              <td>{t.date}</td>
              <td>{t.type}</td>
              <td>{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
