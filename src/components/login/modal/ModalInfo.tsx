import React, { FC, useContext } from "react";
import {
  UserContext,
  UserContextType,
} from "../../Context/userHW5/UserContext";
import style from "./Modal.module.scss";

const ModalInfo = () => {
  const { user, loginUser, logoutUser } = useContext(
    UserContext
  ) as UserContextType;

  const logout = () => {
    loginUser(false);
    logoutUser(true);
  };

  return (
    <div>
      {!!user?.login ? (
        <>
          <div className={style["modal--avatar"]}>
            <img src={user?.avatar} alt={user?.login} />
          </div>

          <div className={style["modal--user"]}>Войти как {user.login}</div>

          <div className={style["modal--button"]}>
            <button onClick={logout}>Sign in</button>
          </div>
        </>
      ) : (
        <span>Account not found</span>
      )}
    </div>
  );
};

export default ModalInfo;
