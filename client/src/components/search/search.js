import React, { useState } from "react";
import "./search.css";
import axios from "axios";

const Search = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadedErr, setLoadedErr] = useState(false);
  const [loadedErr1, setLoadedErr1] = useState(false);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const searchToServer = async () => {
    await axios.get(`/api/products/?search=${value}`).then((res) => {
      if (res.data.length === 0) {
        setLoaded(false);
        setLoadedErr1(true);
      } else {
        setProducts(res.data);
        setLoaded(true);
        setLoadedErr1(false);
        setLoadedErr(false);
      }
    });
  };

  const valueSearch = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="search">
      <div>חפש מוצר </div>
      <div>
        <input type="text" id="input3" onChange={valueSearch}></input>
        <button
          className="btn"
          onClick={() => {
            if (value === "") {
              setLoadedErr(true);
              setLoadedErr1(false);
              setLoaded(false);
            } else {
              searchToServer();
              setLoadedErr(false);
            }
          }}
        >
          חפש
        </button>

        {loadedErr && <div>אנא הכנס מוצר לחיפוש</div>}
        {loadedErr1 && <div>פריט לא קיים נסה שוב</div>}

        {loaded && (
          <div>
            <button
              className="btn1"
              onClick={() => {
                setLoaded(false);
                document.getElementById("input3").value = "";
                setValue("");
              }}
            >
              נקה חיפוש
            </button>
            <br />
            {products.map((product) => (
              <div className="productsearch">
                <div>
                  <img className="imgsearch" src={product.image} alt="" />
                </div>

                <div>
                  {" "}
                  <h3> {product.title}</h3>{" "}
                </div>

                <div>
                  {" "}
                  <h6>מחיר : {product.price}</h6>{" "}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
