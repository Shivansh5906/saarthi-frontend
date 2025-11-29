import React, { useState } from "react";
import axios from "../api/apiClient";   // your axios base URL folder

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  const sendOption = async (option) => {
    const res = await axios.post("/chat", { message: option });

    setMessages([...messages, { sender: "user", text: option }, { sender: "bot", text: res.data.response }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg,i)=>
          <p key={i} className={msg.sender === "bot" ? "bot-msg":"user-msg"}>{msg.text}</p>
        )}
      </div>

      <div className="chat-options">
        <button onClick={()=>sendOption("balance")}>💰 Balance</button>
        <button onClick={()=>sendOption("transactions")}>🧾 Last 5 Transactions</button>
        <button onClick={()=>sendOption("account details")}>📄 Account Details</button>
        <button onClick={()=>sendOption("contact")}>📞 Contact Us</button>
      </div>
    </div>
  );
}
