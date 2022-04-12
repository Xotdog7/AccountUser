import React from "react";
import UserContextProvider from "../Context/userHW5/UserContextProvider";
import Login from "./login/Login";
import Menu from "./menu/Menu";
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={style.left}>
      <UserContextProvider>
        <Login />
        <Menu/>
      </UserContextProvider>
    </div>
  );
};

export default Navbar;
