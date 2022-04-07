import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import {
  UserContext,
  UserContextType,
} from "../../../Context/userHW5/UserContext";
import style from "./Modal.module.scss";
import ModalLogin from "./ModalLogin";

const Modal = () => {
  const { login, loginUser } = useContext(UserContext) as UserContextType;

  const changeState = () => {
    loginUser(false);
  };

  return (
    <div
      className={login ? style.modal + " " + style.active : style.modal}
      onClick={changeState}
    >
      <ModalLogin />
    </div>
  );
};

export default Modal;
