import React, { useState } from "react";
import "./crud.css";
import Addstore from "../addstore/addstore";
import Removestore from "../rmovestore/removestore";
import Change from "../change/change";
import Chat from "../chat/chat";
import { Link } from "react-router-dom";

const Crud = () => {
  return (
    <div>
      <Link to={"/Manage/"}>
        <div className="crud" dir="rtl">
          <div>
            <Addstore />
            <Removestore />
            <Change />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Crud;
