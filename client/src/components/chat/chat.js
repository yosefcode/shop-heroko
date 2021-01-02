import React, { useState } from "react";
import "./chat.css";

import socketIOClient from "socket.io-client";

var socket = null;

const Chat = () => {
  const [input, setInput] = useState("");
  const [username, setusername] = useState();
  const [messages, setmessages] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerCreateMessage({ content: input });
    setInput("");
  };

  if (socket === null) {
    socket = socketIOClient("http://localhost:7000");
  }

  socket.on("SET_USERNAME", (username) => {
    setusername([username]);
  });

  socket.on("CREATE_MESSAGE", (messageObject) => {
    setmessages([...messages, messageObject]);
  });

  // this.myRef = React.createRef();

  const handlerCreateMessage = (message) => {
    message.user = username;
    socket.emit("SEND_MESSAGE", message);
  };

  return (
    <div className="chat">
      {/* <Messages
        //  refProp={this.myRef}
        messages={messages}
        username={username}
      /> */}
      {messages.map((message, indexMessage) => (
        <div
          // className="message"
          className={`message ${
            { username } == message.user ? "message--me" : ""
          }`}
          key={indexMessage}
        >
          {console.log(username, message.user)}{" "}
          <div className="message__user">{message.user}</div>
          <div className="message__content">{message.content}</div>
        </div>
      ))}

      <div className="create-message">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please enter message"
        />
        <input type="submit" value="SEND" onClick={handlerSubmit} />
      </div>
    </div>
  );
};

export default Chat;
