import React, { useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
// import axios from "axios";

const Product = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const minus = () => {
    props.minuspro();
    setQuantity(quantity === "אזל מהמלאי" ? 1 : quantity + 1);
    props.removeCart();
    props.removecartproduct();
  };

  const plus = () => {
    props.pluspro();
    props.addCart();
    setQuantity(quantity > 1 ? quantity - 1 : "אזל מהמלאי");
    props.addcartproduct();
    props.addcartmongo();
  };
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <br />

      {/* <Link to={"/" + props.id}> */}
      <img src={props.image} alt="תמונה חסרה" />
      {/* </Link> */}
      <br />
      <br />
      <h6>כמות מוצרים : {quantity}</h6>
      <h6>מחיר : {props.price}</h6>
      <h5>
        <button
          className="plus"
          disabled={quantity === "אזל מהמלאי" || 0}
          onClick={plus}
        >
          +
        </button>
        {props.items}
        <button className="minus" disabled={props.items === 0} onClick={minus}>
          -
        </button>
      </h5>
    </div>
  );
};

export default Product;
