import React, { useState, useEffect } from "react";
import "./addstore.css";
import axios from "axios";

const Addstore = () => {
  let product = {};
  const [loaded, setLoaded] = useState(false);

  const addProduct = () => {
    axios.post(process.env.REACT_APP_URL, product).then((res) => {});
    document.getElementById("image").value = "";
    document.getElementById("title").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
  };

  const alertTimeout = () => {
    setTimeout(() => setLoaded(false), 3000);
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
    <div>
      {loaded && <div className="divalert">המוצר נוסף בהצלחה</div>}

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
          <button
            className="btn"
            onClick={() => {
              addProduct();
              setLoaded(true);
              alertTimeout();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Addstore;
