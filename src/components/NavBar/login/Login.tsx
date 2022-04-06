import { type } from "os";
import React, { useContext, useState } from "react";
import { UserContext, UserContextType } from "../../Context/userHW5/UserContext";
import Dropdown from "./dropdown/Dropdown ";
import Modal from "./modal/Modal";


const Login = () => {
  const { logout, loginUser, checkUser } = useContext(UserContext) as UserContextType;

  const changeState = () => {
    loginUser(true);

  };

  return (
    <div>
      {!logout ? <button onClick={changeState}>login</button> : <Dropdown />}
      <Modal />
    </div>
  );
};

export default Login;
