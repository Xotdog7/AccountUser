import React, { useContext } from "react";
import {
  UserContext,
  UserContextType,
} from "../../../Context/userHW5/UserContext";
import style from "./Modal.module.scss";
import ModalInfo from "./ModalInfo";

const ModalLogin = () => {
  const { login, user } = useContext(UserContext) as UserContextType;
  return (
    <div
      className={
        login ? style.content + " " + style.activeContant : style.content
      }
      onClick={(e) => e.stopPropagation()}
      >
        <ModalInfo />
    </div>
  );
};

export default ModalLogin;
