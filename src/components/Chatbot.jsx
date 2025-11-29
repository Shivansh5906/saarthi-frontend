import React, { useState } from "react";
import axios from "../api/apiClient";
import "./Chatbot.css";

export default function Chatbot() {
  const [open,setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I am Saarthi! 🤖\nHow can I help you today?" }
  ]);

  const sendOption = async (option) => {
    const res = await axios.post("/chat",{message:option});
    setMessages([
      ...messages,
      { sender:"user", text:option },
      { sender:"bot", text:res.data.response }
    ]);
  };

  return (
    <>
      <button className="chat-toggle-btn" onClick={()=>setOpen(!open)}>
        💬 Ask Saarthi
      </button>

      <div className={`chat-container ${open?"open":""}`}>
        <div className="chat-box">
          {messages.map((msg,i)=>
            <p key={i} className={msg.sender==="bot"?"bot-msg":"user-msg"}>{msg.text}</p>
          )}
        </div>

        <div className="chat-options">
          <button onClick={()=>sendOption("Balance")}>💰 Balance</button>
          <button onClick={()=>sendOption("Transactions")}>📄 Last 5 Transactions</button>
          <button onClick={()=>sendOption("Account Details")}>🧾 Account Details</button>
          <button onClick={()=>sendOption("Contact")}>📞 Contact Us</button>
        </div>
      </div>
    </>
  );
}
