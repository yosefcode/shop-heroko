import React, { useState, useEffect } from "react";
import axios from "axios";

export default
//  Axios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://quilt-flax-chemistry.glitch.me/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
// };
