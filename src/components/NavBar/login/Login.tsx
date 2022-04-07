import { type } from "os";
import React, { useContext, useState } from "react";
import {
  UserContext,
  UserContextType,
} from "../../Context/userHW5/UserContext";
import Dropdown from "./dropdown/Dropdown ";
import Modal from "./modal/Modal";

const Login = () => {
  const { logout, loginUser } = useContext(UserContext) as UserContextType;

  const changeState = () => {
    loginUser(true);
  };

  const button = !logout ? (
    <button onClick={changeState}>Sign in</button>
  ) : (
    <Dropdown />
  );

  return (
    <div>
      {button}
      <Modal />
    </div>
  );
};

export default Login;
