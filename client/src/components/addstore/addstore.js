import React, { useState } from "react";
import "./addstore.css";
import axios from "axios";
import socketIOClient from "socket.io-client";

const Addstore = () => {
  let product = {};

  const addProduct = () => {
    axios
      .post(process.env.REACT_APP_URL, product)
      .then((res) => console.log(res.data));
    document.getElementById("image").value = "";
    document.getElementById("title").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
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
          id="image"
          type="text"
          onChange={(e) => (product.image = e.target.value)}
          placeholder="image"
        />
        <input
          id="title"
          type="text"
          onChange={(e) => (product.title = e.target.value)}
          placeholder="title"
        />{" "}
        <br />
        <input
          className="input"
          id="quantity"
          type="text"
          onChange={(e) => (product.quantity = +e.target.value)}
          placeholder="quantity"
        />
        {"    "}
        <input
          className="input"
          id="price"
          type="text"
          onChange={(e) => (product.price = +e.target.value)}
          placeholder="price"
        />{" "}
        <br />
        <button className="btn" onClick={addProduct}>
          Add
        </button>
      </div>
    </div>
  );
};
export default Addstore;
