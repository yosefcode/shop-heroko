import React, { useState, useEffect } from "react";
import axios from "axios";

import "./cart.css";
// import del from "../img/delete.png";

const Cartmongo = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [cartmongoaa] = useState({
    title: props.title,
    // price: props.price,
  });

  // useEffect(() => {
  axios
    .post("http://localhost:7005/cart/", cartmongoaa)
    .then((res) => console.log(res.data));
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:7005/cart/").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  // const minus = () => {
  //   props.removeCart();
  //   props.minusCart();
  // };
  // const plus = () => {
  //   props.plusCart();
  //   props.addCart();
  // };

  return (
    <div className="cartproduct">
      <div>
        {/* <img className="imgprod" src={props.image} alt="sory" /> */}
      </div>
      {/* <div>{props.title}</div>
    <div>{props.price} ש"ח</div> */}
      {/* <button
      // className="plus"
      // disabled={itemscart === "אזל מהמלאי" || 0}
      onClick={plus}
      >
      +
    </button> */}
      {/* <div>{props.itemscart}</div> */}
      {/* <button
      // className="minus"
      // disabled={itemscart === 0}
      onClick={minus}
      >
      -
    </button> */}
      {/* <img
      className="delete"
      onClick={() => {
        props.onRemove();
        // props.reset();
        // setCartmongoaa({ title: props.title, price: props.price });
      }}
      src={del}
      alt="sory"
    /> */}
      <button
        className="btn"
        onClick={() => {
          setLoaded(true);
        }}
      >
        חפש
      </button>
      {loaded &&
        products.map((productcart) => (
          <div>
            {/* key={productcart.id}
          id={productcart.id}
          quantity={productcart.quantity} */}
            title={productcart.title}
            {/* image={productcart.image} */}
            {/* price={productcart.price}
          itemscart={productcart.itemscart} */}
          </div>
        ))}

      <br />
    </div>
  );
};

export default Cartmongo;
