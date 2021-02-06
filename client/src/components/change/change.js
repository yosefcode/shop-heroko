import React, { useState, useEffect } from "react";
import "./change.css";
import axios from "axios";
import socketIOClient from "socket.io-client";

const Change = (props) => {
  let product = {};
  const [loaded, setLoaded] = useState(false);

  const [loaded1, setLoaded1] = useState(false);
  const [productId, setProductId] = useState();
  const [products, setProducts] = useState([]);

  const socket = socketIOClient(process.env.REACT_APP_URLSOCKET);

  const getproducts = () => {
    axios.get(process.env.REACT_APP_URL).then((res) => {
      setProducts(res.data);
    });
  };

  const changePro = () => {
    axios.put(process.env.REACT_APP_URL + productId, product).then((res) => {});
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
      {loaded && <div className="divalert">המוצר שונה בהצלחה</div>}

      <div className="change">
        <div> בחר מוצר לשינוי </div>
        <div>
          {products.map((product) => (
            <button className="btnimg" key={product._id}>
              <img
                className="imgchange"
                src={product.image}
                alt=""
                onClick={() => {
                  setProductId(product._id);
                  setLoaded1(true);
                }}
              />
            </button>
          ))}
          {loaded1 && (
            <div>
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
                id="input"
                type="text"
                onChange={(e) => (product.quantity = +e.target.value)}
                placeholder="quantity"
              />{" "}
              <input
                id="input"
                type="text"
                onChange={(e) => (product.price = +e.target.value)}
                placeholder="price"
              />{" "}
              <br />
              <button
                className="btn"
                onClick={() => {
                  changePro();
                  setLoaded(true);
                  alertTimeout();
                }}
              >
                שנה מוצר
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Change;
