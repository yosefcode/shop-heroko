import React, { useState } from "react";
import "./chatseler.css";
// import axios from "axios";
import socketIOClient from "socket.io-client";

const ChatSeler = () => {
  var socket = null;

  if (socket === null) {
    socket = socketIOClient("http://localhost:7000");
  }

  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    { username: "sss", content: "aaasss" },
    { username: "yos", content: "bbbsss" },
  ]);
  // socket.on("SET_USERNAME", (username) => {
  //   setChat({
  //     username: username,
  //   });
  // });
  socket.on("CREATE_MESSAGE", (ms) => {
    console.log("aaaa");
    setChat([
      ...chat,
      {
        content: ms,
      },
    ]);
  });

  const add = () => {
    socket.emit("SEND_MESSAGE", input);
    // setChat([
    //   ...chat,
    //   {
    // username: "username",
    // content: input,
    // username: "username",
    // content:
    // },
    // ]);
    setInput("");
  };

  return (
    <div className="chatbb">
      <div> צ'אט מוכר</div>
      {chat.map((chat, index) => (
        <div key={index}>
          {/* {chat.username}: */}
          {chat.content}
        </div>
      ))}

      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="image"
        />

        <button type="submit" className="btn" onClick={add}>
          שלח
        </button>
      </div>
    </div>
  );
};
export default ChatSeler;
