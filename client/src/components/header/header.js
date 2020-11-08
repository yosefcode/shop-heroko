import React from "react";
import "./header.css";
import Store from "./img/store.png";
import what from "./img/WhatsApp.png";
import call from "./img/call.svg";
import mail from "./img/mail.png";

const Header = () => {
  return (
    <div className="header">
      <h3>רהיטי איכות</h3>
      <h5>איזור התעשייה שער בנימין</h5>
      <ion-icon name="logo-youtube"></ion-icon>
      <ion-icon src="/path/to/external/file.svg"></ion-icon>
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      <h5>058-411-2424</h5>

      <img className="what" src={what} alt="תמונה חסרה" onClick={ ()=>{
    window.open ( "https://wa.me/972584112424/")
}}/>
      <img className="call" src={call} alt="תמונה חסרה" onClick={ ()=>{
    window.open ( "tel:0584112424")
}}/>
      <img className="mail" src={mail} alt="תמונה חסרה" onClick={ ()=>{
    window.open ( "mailto:yosef9987@gmail.com")
}}/>

      <img className="imgr" src={Store} alt="תמונה חסרה" />
      <img className="imgl" src={Store} alt="תמונה חסרה" />
    </div>
  );
};

export default Header;
