import React from "react";
import Login from "../../components/login/Login";
import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import "./Main.scss";
const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Content />
    </div>
  );
};

export default Main;
