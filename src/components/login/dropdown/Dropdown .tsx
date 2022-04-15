import React, { useContext } from "react";
import { UserContext, UserContextType } from "../../Context/userHW5/UserContext";

import style from "./Dropdown.module.scss";
const Dropdown = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;

  const logout = () => {
    logoutUser(false);
  };
  return (
    <div className={style.dropdown}>
      <span className={style.dropImg}>
        <img src={user?.avatar} alt={user?.login} />
      </span>

      <ul className={style["dropdown--content"]}>
        <li>
          <button>Profile</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
