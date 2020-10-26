import React, { useState } from "react";
import "./removestore.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Removestore = (props) => {
  let password = "";
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState("open");
  const [productId, setProductId] = useState();

  const removeProduct = () => {
    axios
      .delete("http://localhost:7000/api/products/"+ productId||"/api/products/" + productId)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="removestore">
      <div>הסר מוצר מהחנות</div>
      <div>
        <input
          id="input1"
          type="password"
          placeholder="הכנס סיסמא"
          onInput={
            (e) => (password = e.target.value) // onChange=
          }
        ></input>
        <button
          className="btn"
          onClick={() => {
            if (password === "1234") {
              document.getElementById("input1").value = "";
              document.getElementById("input1").placeholder = "נכנסת בהצלחה";
              setLoaded(true);
              setOpen("close");
            } else {
              document.getElementById("input1").value = "";
              document.getElementById("input1").placeholder = "נסה שוב";
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
          {props.products.map((product) => (
            <Link to={"/" + product._id}>
              <img
                className="imgdel"
                src={product.image}
                alt=""
                onClick={() => setProductId(product._id)}
              />
            </Link>
          ))}
          <button className="btn" onClick={() => removeProduct(productId)}>
            delete
          </button>
        </div>
      )}
    </div>
  );
};
export default Removestore;