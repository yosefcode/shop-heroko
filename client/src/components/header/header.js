import React from "react";
import "./header.css";
import Store from "./img/store.png";

const Header = () => {
  return (
    <div className="header">
      <h3>רהיטי איכות</h3>
      <h5>איזור התעשייה שער בנימין</h5>
      <h5>057-896-8754</h5>
      <img className="imgr" src={Store} alt="תמונה חסרה" />
      <img className="imgl" src={Store} alt="תמונה חסרה" />
    </div>
  );
};

export default Header;
