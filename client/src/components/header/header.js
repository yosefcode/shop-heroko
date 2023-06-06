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
      <h5>רחוב המעפילים 5 עפולה</h5>
      <ion-icon name="logo-youtube"></ion-icon>
      <ion-icon src="/path/to/external/file.svg"></ion-icon>
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      <h5>050-123-4567</h5>

      <img
        className="what"
        src={what}
        alt="תמונה חסרה"
        onClick={() => {
          window.open("https://wa.me/972501234567/");
        }}
      />
      <img
        className="call"
        src={call}
        alt="תמונה חסרה"
        onClick={() => {
          window.open("tel:0501234567");
        }}
      />
      <img
        className="mail"
        src={mail}
        alt="תמונה חסרה"
        onClick={() => {
          window.open("mailto:gmail@gmail.com");
        }}
      />

      <img className="imgr" src={Store} alt="תמונה חסרה" />
      <img className="imgl" src={Store} alt="תמונה חסרה" />
    </div>
  );
};

export default Header;
