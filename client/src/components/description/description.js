import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./description.css";

const Description = () => {
  const { id } = useParams();
  // console.log(id);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products/" + { id }).then((res) => {
      setProducts(res.data);
      // console.log(res.data);
    });
  });

  return (
    <div className="description">
      title: {products.title}
      <br />
      <img src={products.image} alt="" />
      <br />
      Description:
      <br />
      {products.description}
    </div>
  );
};

export default Description;
