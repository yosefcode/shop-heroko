import "./kesher.css";
import axios from "axios";
import React from "react";

function Kesher() {
  let infoKesher = {};

  const addProduct = () => {
    axios
      .post(`${process.env.REACT_APP_URL}send-mail/`, infoKesher)
      .then((res) => console.log("res.data"));

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <div className="kesher">
      <form method="GET">
        <h5>
          רוצים להתעדכן במבצעי החנות? הכניסו את המייל שלכם ואנו נעדכן אתכם
          ראשונים.
        </h5>
        <input
          id="name"
          className="inputKesher"
          type="text"
          onInput={(e) => (infoKesher.name = e.target.value)}
          placeholder="שם"
        />
        <input
          id="mail"
          className="inputKesher"
          type="text"
          onChange={(e) => (infoKesher.email = e.target.value)}
          placeholder="מייל"
        />{" "}
        <textarea
          id="message"
          className="textareaKesher"
          type="text"
          onChange={(e) => (infoKesher.message = e.target.value)}
          placeholder="שתף אותנו..."
        />{" "}
        <button
          className="btnKesher"
          type="reset"
          onClick={() => {
            addProduct();
          }}
        >
          שלח
        </button>
      </form>
    </div>
  );
}

export default Kesher;
