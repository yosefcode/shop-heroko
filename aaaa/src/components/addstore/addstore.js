import React, { useState } from "react";
import "./addstore.css";
import axios from "axios";

const Addstore = () => {
  let product = {};
  let password = "";
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState("open");

  const addProduct = () => {
    axios
      .post("http://localhost:7000/api/products/"||"/api/products/", product)
      .then((res) => console.log(res.data));
  };

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
            if (password === "1234") {
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
