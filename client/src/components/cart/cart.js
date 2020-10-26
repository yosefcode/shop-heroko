import React, { useState, useEffect } from "react";
import "./cart.css";
import del from "../img/delete.png";

const Cart = (props) => {
  const price = props.price;
  // const [itemscart, setItemscart] = useState(props.itemscart);

  const minus = () => {
    // setItemscart(itemscart - 1);
    props.removeCart();
    props.minusCart();
  };
  const plus = () => {
    props.plusCart();
    // setItemscart(itemscart + 1);
    // setQuantity(props.quantity);
    props.addCart();
  };
  const deletecart = () => {
    if (props.itemscart === 0) {
      props.onRemove();
    }
  };
  deletecart();
  return (
    <div className="cartproduct">
      <div>
        <img className="imgprod" src={props.image} alt="sory" />
      </div>
      <div>{props.title}</div>
      <div>{price} ש"ח</div>
      <button
        // className="plus"
        // disabled={itemscart === "אזל מהמלאי" || 0}
        onClick={plus}
      >
        +
      </button>
      <div>{props.itemscart}</div>

      <button
        // className="minus"
        // disabled={itemscart === 0}
        onClick={minus}
      >
        -
      </button>
      <img
        className="delete"
        onClick={() => {
          props.onRemove();
          // props.reset();
        }}
        src={del}
        alt="sory"
      />

      <br />
    </div>
  );
};

export default Cart;
