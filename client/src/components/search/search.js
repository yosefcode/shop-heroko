import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import SimpleAlerts from "./alert";

const Search = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [loadedErr, setLoadedErr] = useState(false);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const searchToServer = async () => {
    // if (value === "") {
    //   console.log("err");
    // } else {
    await axios.get(`/api/products/?search=${value}`).then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
    // }
  };

  const valueSearch = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="search">
      <div>חפש מוצר </div>
      <div>
        <input type="text" id="input2" onChange={valueSearch}></input>
        <button
          className="btn"
          onClick={async () => {
            if (value === "") {
              setLoadedErr(true);
            } else {
              await searchToServer();
              setLoaded(true);
              setLoadedErr(false);
            }
          }}
        >
          חפש
        </button>
        {loadedErr && <SimpleAlerts />}

        {loaded && (
          <div>
            <button
              className="btn1"
              onClick={() => {
                setLoaded(false);
                document.getElementById("input2").value = "";
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
