import React, { useState } from "react";
import "./search.css";
import axios from "axios";

const Search = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const searchToServer = async () => {
    // if (valueSearch == true) {
    await axios
      .get(`/api/products/?search=${value}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      });
    // } else {
    //   console.log("err");
    // }
  };

  const valueSearch = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="search">
      <div>חפש מוצר </div>
      <div>
        <input
          type="text"
          onChange={valueSearch}
        ></input>
        <button
          className="btn"
          onClick={async () => {
                // if (value === true) {

            await searchToServer();
            setLoaded(true);
    //             } else {
    //   console.log("err");
    // }

          }}
        >
          חפש
        </button>
        {loaded && (
          <div >
            <button
                      className="btn1"

              onClick={() => {
                setLoaded(false);

              }}
            >
              סגור חיפוש
            </button>
            <br/>
            {products.map((product) => (
              <div className="productsearch">

             <div><img className="imgsearch" src={product.image} alt="" /></div>

             <div>   <h3> {product.title}</h3>               </div>

                <div>   <h6>מחיר : {product.price}</h6>               </div>

               </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
