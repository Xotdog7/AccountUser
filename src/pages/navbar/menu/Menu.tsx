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
      <span>Homework7</span>
      <li>
        <Link className={style.none} to="/students">
          Student
        </Link>
      </li>
      <li>
        <Link className={style.none} to="/">
          Facultet
        </Link>
      </li>
    </div>
  );
};

export default Menu;
