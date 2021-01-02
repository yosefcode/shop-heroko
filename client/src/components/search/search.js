import React, { useState } from "react";
import "./search.css";
import axios from "axios";
<<<<<<< HEAD
import { Icon, InlineIcon } from "@iconify/react";
import magnifierIcon from "@iconify-icons/simple-line-icons/magnifier";

const Search = () => {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
=======
import { Icon } from "@iconify/react";
import magnifierIcon from "@iconify-icons/simple-line-icons/magnifier";

const Search = () => {
  // const [loaded, setLoaded] = useState(false);
  // const [products, setProducts] = useState([]);
>>>>>>> 974d734e5f52300e91b48ff68d55dbb157cf303e
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("מה אתה מחפש?");

  const searchToServer = async () => {
    await axios.get(`/api/products/?search=${value}`).then((res) => {
      if (res.data.length === 0) {
<<<<<<< HEAD
        setLoaded(false);
=======
        // setLoaded(false);
>>>>>>> 974d734e5f52300e91b48ff68d55dbb157cf303e
        setValue("");
        setPlaceholder("מצטערים... לא מצאנו את מה שחיפשת...");
      } else {
        setValue("");
        setPlaceholder("יש!!! מצאנו....");
<<<<<<< HEAD
        setProducts(res.data);
        setLoaded(true);
=======
        // setProducts(res.data);
        // setLoaded(true);
>>>>>>> 974d734e5f52300e91b48ff68d55dbb157cf303e
      }
    });
  };

  const valueSearch = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="search">
      <div className="searchinput">
        <input
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={valueSearch}
        ></input>
        <button
          className="btn"
          onClick={() => {
            if (value === "") {
              setValue("");
              setPlaceholder("אנא הכנס מוצר לחיפוש");
<<<<<<< HEAD
              setLoaded(false);
=======
              // setLoaded(false);
>>>>>>> 974d734e5f52300e91b48ff68d55dbb157cf303e
            } else {
              searchToServer();
            }
          }}
        >
          <Icon icon={magnifierIcon} />{" "}
        </button>
      </div>

<<<<<<< HEAD
      <div>
=======
      {/* <div>
>>>>>>> 974d734e5f52300e91b48ff68d55dbb157cf303e
        {loaded && (
          <div className="allsearch">
            <button
              className="btn1"
              onClick={() => {
                setLoaded(false);
                setPlaceholder("מה אתה מחפש?");
              }}
            >
              נקה חיפוש
            </button>
            <br />
            {products.map((product) => (
              <div className="productsearch" key={product._id}>
                <div className="boxgrid">
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
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};
export default Search;
