import React from "react";
import "./crud.css";
import Addstore from "../addstore/addstore";
import Removestore from "../rmovestore/removestore";
import Change from "../change/change";

const Crud = () => {
  return (
    <div className="crud" dir="rtl">
      <Addstore />
      <Removestore />
      <Change />
    </div>
  );
};
export default Crud;
