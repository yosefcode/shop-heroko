import React, { useState } from "react";
import "./manage.css";

const Manage = () => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("הכנס סיסמא");

  const openLink = () => {
    window.open("/Manage");
  };

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
              setValue("");
              setPlaceholder("נכנסת בהצלחה");
              openLink();
            } else {
              setValue("");
              setPlaceholder("נסה שוב");
            }
          }}
        >
          כניסה{" "}
        </button>
      </div>
    </div>
  );
};
export default Manage;
