import React, { useState } from "react";
import "./search.css";
import axios from "axios";

const Search = (props) => {
  let valueSearch = "";
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const searchToServer = async () => {
    // if (valueSearch === true) {
    await axios
      .get(`/api/search/?search=${value}`)
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
          onChange={(e) => (valueSearch = e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={async () => {
            setValue(valueSearch);
            console.log(value);
            await searchToServer();
            // if (value === false) {
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
                <h3>תיאור : {product.description}</h3>
                <h3>מחיר : {product.price}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
