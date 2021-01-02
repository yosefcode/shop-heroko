import React, { useState, useEffect } from "react";
import "./change.css";
import axios from "axios";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";

const Change = (props) => {
  let product = {};

  const [loaded1, setLoaded1] = useState(false);
  const [productId, setProductId] = useState();
  const [products, setProducts] = useState([]);

  const socket = socketIOClient(process.env.REACT_APP_URLSOCKET);

  const getproducts = () => {
    axios.get(process.env.REACT_APP_URL).then((res) => {
      setProducts(res.data);
    });
  };

  const removePro = () => {
    axios
      .put(process.env.REACT_APP_URL + productId, product)
      .then((res) => console.log(res.data));
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

  return (
    <div className="change">
      <div> בחר מוצר לשינוי </div>
      <div>
<<<<<<< HEAD
        {props.products.map((product) => (
=======
        {products.map((product) => (
>>>>>>> 974d734e5f52300e91b48ff68d55dbb157cf303e
          <Link key={product._id} to={"/" + product._id}>
            <img
              className="imgchange"
              src={product.image}
              alt=""
              onClick={() => {
                setProductId(product._id);
                setLoaded1(true);
              }}
            />
          </Link>
        ))}
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
                removePro(productId);

                console.log(product, productId);
              }}
            >
              שנה מוצר
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Change;
