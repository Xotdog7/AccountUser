import React, { useContext } from "react";
import {
  UserContext,
  UserContextType,
} from "../../../Context/userHW5/UserContext";
import style from "./Logout.module.scss";
const Logout = () => {
    const avatar = {}
  const { user, logoutUser } = useContext(UserContext) as UserContextType;


  return (
    <div className={style.dropdown}>
      <div className={style.dropImg}>
        <img src={user?.avatar} alt={user?.login} />
      </div>
      <ul className={style["dropdown--content"]}>
        <li>
          <a href="/das" onClick={(e) => e.preventDefault()}>
            Profile
          </a>
        </li>
        <li>
          <a href="">logout</a>
        </li>
        
      </ul>
    </div>
  );
};

export default Logout;
