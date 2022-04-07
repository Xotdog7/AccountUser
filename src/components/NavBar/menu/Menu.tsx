import React from "react";
import { Link } from "react-router-dom";
import style from "../Navbar.module.scss";

const Menu = () => {
  return (
    <div>
      <li>
        <Link className={style.none} to="/actor">
          Actor
        </Link>
      </li>
      <li>
        <Link className={style.none} to="/movie">
          Film
        </Link>
      </li>
    </div>
  );
};

export default Menu;
