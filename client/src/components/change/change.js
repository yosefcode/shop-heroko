import React, { useState } from "react";
import "./change.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Change = (props) => {
  let product = {};

  let password = "";
  const [loaded, setLoaded] = useState(false);
  const [loaded1, setLoaded1] = useState(false);
  const [open, setOpen] = useState("open");
  const [productId, setProductId] = useState();

  const removePro = () => {
    axios
      .put(process.env.REACT_APP_URL + productId, product)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="change">
      <div>שינוי מוצר</div>
      <div>
        <input
          id="input2"
          type="password"
          placeholder="הכנס סיסמא"
          onInput={
            (e) => (password = e.target.value) // onChange=
          }
        ></input>
        <button
          className="btn"
          onClick={() => {
            if (password === process.env.REACT_APP_PASS) {
              document.getElementById("input2").value = "";
              document.getElementById("input2").placeholder = "נכנסת בהצלחה";
              setLoaded(true);
              setOpen("close");
            } else {
              document.getElementById("input2").value = "";
              document.getElementById("input2").placeholder = "נסה שוב";
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
          <div> בחר מוצר לשינוי </div>
          {props.products.map((product) => (
            <Link to={"/" + product._id}>
              <img
                className="imgdel"
                src={product.image}
                alt=""
                onClick={() => {
                  setProductId(product._id);
                  setLoaded1(true);
                }}
              />
            </Link>
          ))}
          {/* <input
            type="text"
            onChange={(e) => (product.title = e.target.value)}
            placeholder="title"
          />{" "} */}
          {loaded1 && (
            <div className="aaa">
              <input
                type="text"
                onChange={(e) => (product.image = e.target.value)}
                placeholder="image"
              />{" "}
              <br />
              <input
                type="text"
                onChange={(e) => (product.title = e.target.value)}
                placeholder="title"
              />{" "}
              <br />
              <input
                type="text"
                onChange={(e) => (product.quantity = +e.target.value)}
                placeholder="quantity"
              />{" "}
              <br />
              <input
                type="text"
                onChange={(e) => (product.price = +e.target.value)}
                placeholder="price"
              />{" "}
              <br />
              <button
                className="btn"
                onClick={() => {
                  removePro(productId);

                  console.log(product, productId);
                }}
              >
                שנה מוצר
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Change;
