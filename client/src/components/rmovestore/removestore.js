import React, { useState, useEffect } from "react";
import "./removestore.css";
import axios from "axios";
import socketIOClient from "socket.io-client";

const Removestore = (props) => {
  // let password = "";
  const [loaded, setLoaded] = useState(false);
  // const [open, setOpen] = useState("open");
  const [productId, setProductId] = useState();
  const [products, setProducts] = useState([]);

  const socket = socketIOClient(process.env.REACT_APP_URLSOCKET);

  const getproducts = () => {
    axios.get(process.env.REACT_APP_URL).then((res) => {
      setProducts(res.data);
    });
  };

  const removeProduct = () => {
    axios
      .delete(process.env.REACT_APP_URL + productId)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    getproducts();

    socket.on("AddProduct", () => {
      getproducts();
    });

    socket.on("DeleteProduct", () => {
      getproducts();
    });
  }, []);

  const alertTimeout = () => {
    setTimeout(() => setLoaded(false), 3000);
  };

  return (
    <div>
      {loaded && <div className="divalert">המוצר הוסר בהצלחה</div>}
      <div className="removestore">
        <div>בחר מוצר להסרה</div>
        {/* <div>
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
              if (password === process.env.REACT_APP_PASS) {
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
          {loaded && ( */}
        <div>
          {products.map((product) => (
            <button className="btnimg" key={product._id}>
              <img
                className="imgdel"
                src={product.image}
                alt=""
                onClick={() => setProductId(product._id)}
              />
            </button>
          ))}
          <br />
          <button
            className="btn"
            onClick={() => {
              removeProduct();
              setLoaded(true);
              alertTimeout();
            }}
          >
            מחק מוצר
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
export default Removestore;
