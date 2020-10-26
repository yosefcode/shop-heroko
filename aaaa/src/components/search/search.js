import React, { useState } from "react";
import "./search.css";
import axios from "axios";

const Search = (props) => {
  let valueSearch = "";
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const searchToServer = async () => {
    // if (value === true) {
    await axios
      .get(`http://127.0.0.1:7000/api/products/search/?search=${value}`||`/api/products/search/?search=${value}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      });
    // } else {
    //   console.log("err");
    // }
  };

  return (
    <div className="search">
      <div>חפש מוצר </div>
      <div>
        <input
          type="text"
          onInput={(e) => (valueSearch = e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={async () => {
            setValue(valueSearch);
            console.log(value);
            await searchToServer();
            // if (searchToServer !== true) {
            setLoaded(true);
            // }
          }}
        >
          חפש
        </button>
        {loaded && (
          <div className="opendiv">
            <button
              onClick={() => {
                setLoaded(false);
              }}
            >
              סגור
            </button>
            {products.map((product) => (
              <div className="productsearch">
                <h2> {product.title}</h2>
                <img className="imgsearch" src={product.image} alt="" />
                <br />
                <h3>quantity : {product.quantity}</h3>
                <h3>price : {product.price}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
