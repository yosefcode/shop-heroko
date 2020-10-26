import React, { useState } from "react";
import "./change.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Change = (props) => {
  let product = {};

  let password = "";
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState("open");
  // const [open, setOpen] = useState("open");

  const removePro = () => {
    axios.put("http://localhost:8000/api/:id").then((res) => console.log(res.data));
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
            if (password === "1234") {
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
          {props.products.map((product) => (
            <Link to={"/" + product.id}>
              <img className="imgdel" src={product.image} alt="" />
            </Link>
          ))}
          <input
            type="text"
            onChange={(e) => (product.title = e.target.value)}
            placeholder="title"
          />{" "}
          <button className="btn" onClick={removePro}>
            delete
          </button>
        </div>
      )}
    </div>
  );
};
export default Change;
