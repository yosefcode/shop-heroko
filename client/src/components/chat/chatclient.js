import React, { useState } from "react";
import "./chatclient.css";
// import axios from "axios";
import socketIOClient from "socket.io-client";

// var socket = null;

// if (socket === null) {
//   socket = socketIOClient("http://localhost:4001");
// }

const Chatclient = (props) => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    // { username: "", content: "aaasss" },
    { username: "bbb", content: "bbbsss" },
  ]);

  // socket.on("SET_USERNAME", (username) => {
  //   setChat({
  //     username: username,
  //   });
  // });

  //   socket.on("CREATE_MESSAGE", (messageObject) => {
  //     setChat({
  //       content: [...chat, messageObject],
  //     });
  //   });

  // const add = () => {
  //   setChat([
  //     //   ...chat,
  //     {
  //       // username: "username",
  //       // content: input,
  //       username: "username",
  //       // content: socket.emit("SEND_MESSAGE", input),
  //     },
  //   ]);
  //   setInput("");
  // };
  // socket.on("CREATE_MESSAGE", (input) => {
  //   console.log("aaaa");
  //   // setChat({
  //   //   content: [...chat, input],
  //   // });
  // });

  // const add = () => {
  //   setChat([
  //     ...chat,
  //     {
  //       // username: "username",
  //       // content: input,
  //       // username: "username",
  //       content: socket.emit("SEND_MESSAGE", input),
  //     },
  //   ]);
  //   setInput("");
  // };

  return (
    <div className="chataa">
      <div> צ'אט לקוח</div>
      {chat.map((chat, index) => (
        <div key={index}>
          {chat.username}: {chat.content}
        </div>
      ))}

      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="image"
        />

        {/* <button type="submit" className="btn" onClick={add}>
          שלח
        </button> */}
      </div>
    </div>
  );
};
export default Chatclient;
