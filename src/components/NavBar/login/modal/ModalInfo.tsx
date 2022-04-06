import React, { FC, useContext } from "react";
import {
  UserContext,
  UserContextType,
} from "../../../Context/userHW5/UserContext";
import style from "./Modal.module.scss";

const ModalInfo = () => {
  const { login, user, loginUser, logoutUser } = useContext(
    UserContext
  ) as UserContextType;

  const logout = () => {
    loginUser(false);
    logoutUser(true);
  };

  const button = !!user?.login ? (
    <button onClick={logout}>Sign in</button>
  ) : (
    <h1>Db</h1>
  );

  return (
    <div>
      {!!user?.login ? (
        <>
          <div className={style["login--avatar"]}>
            <img src={user?.avatar} alt={user?.login} />
          </div>
          <div
            className={style["login--user"]}
          >{`Войти как ${user?.login}`}</div>
          <div className={style["login--button"]}>{button}</div>{" "}
        </>
      ) : (
        <span>Account not found</span>
      )}
    </div>
  );
};

export default ModalInfo;
