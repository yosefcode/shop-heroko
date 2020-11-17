import React, { useState } from "react";
import "./manage.css";
import Addstore from "../addstore/addstore";
import Removestore from "../rmovestore/removestore";
import Change from "../change/change";
import Chat from "../chat/chat";

const Manage = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("הכנס סיסמא");
  const [open, setOpen] = useState("open");
  const [products, setProducts] = useState([]);

  return (
    <div className="manage">
      <div>כניסת מנהל</div>
      <div>
        <input
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={() => {
            if (value === process.env.REACT_APP_PASS) {
              setProducts(props.products);
              setLoaded(true);
              setOpen("close");
              setValue("");
              setPlaceholder("נכנסת בהצלחה");
            } else {
              setValue("");
              setPlaceholder("נסה שוב");
              setLoaded(false);
              setOpen("open");
            }
          }}
        >
          {open}
        </button>
      </div>
      {loaded && (
        <div>
          {/* <br /> */}
          <Addstore />
          <Removestore products={products} />
          <Change products={products} />
          {/* <Chat /> */}
        </div>
      )}
    </div>
  );
};
export default Manage;
