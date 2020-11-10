import React, { useState } from "react";
import "./addstore.css";
import axios from "axios";
import socketIOClient from "socket.io-client";

const Addstore = () => {
  let product = {};
  let password = "";
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState("open");

  const addProduct = () => {
    axios
      .post(process.env.REACT_APP_URL, product)
      .then((res) => console.log(res.data));
  };

  // useEffect(() => {
  //   const socket = socketIOClient(process.env.REACT_APP_URL);
  //   socket.on("FromAPI", (data) => {
  //     console.log(data);
  //     setProducts(data);
  //     // setTimeout(() => setTodo({}), 3000);
  //   });
  // }, []);

  return (
    <div className="addstore">
      <div>הוסף מוצר לחנות</div>
      <div>
        <input
          id="input"
          type="password"
          placeholder="הכנס סיסמא"
          onChange={(e) => (password = e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={() => {
            if (password === process.env.REACT_APP_PASS) {
              setLoaded(true);
              setOpen("close");
              document.getElementById("input").value = "";
              document.getElementById("input").placeholder = "נכנסת בהצלחה";
            } else {
              document.getElementById("input").value = "";
              document.getElementById("input").placeholder = "נסה שוב";
              setLoaded(false);
              setOpen("open");
            }
          }}
        >
          {open}
        </button>
      </div>
      {loaded && (
        <div className="opendiv">
          <input
            type="text"
            onChange={(e) => (product.image = e.target.value)}
            placeholder="image"
          />
          <input
            type="text"
            onChange={(e) => (product.title = e.target.value)}
            placeholder="title"
          />{" "}
          <input
            type="text"
            onChange={(e) => (product.quantity = +e.target.value)}
            placeholder="quantity"
          />
          <input
            type="text"
            onChange={(e) => (product.price = +e.target.value)}
            placeholder="price"
          />{" "}
          <br />
          <button className="btn" onClick={addProduct}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};
export default Addstore;
