import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteFacultiet, getFaculties } from "../../../../services/facultet";
import { Facultiet } from "../../../../types";
import style from "../../Navbar.module.scss";

const FacultietList = () => {
  const [faculties, setFaculties] = useState<Facultiet[]>([]);

  useEffect(() => {
    getFaculties().then((res) => {
      setFaculties(res);
    });
  }, []);

  const deleteClick = (id: string) => {
    setFaculties((value) => value.filter((item) => id !== item.id));

    deleteFacultiet(id);
  };

  return (
    <div className={style.facultetMain}>
      <h3>Homework 7. CRUD Faculteit </h3>
      <h2>Faculteit</h2>
      <Link to="/faculties/create">Create</Link>
      <table className={style.styledTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((facultet) => (
            <tr key={facultet.id}>
              <td>{facultet.id}</td>
              <td>{facultet.name}</td>
              <td>{facultet.createdAt}</td>
              <td>{facultet.updatedAt}</td>
              <td>
                <div>
                  <Link to={`/faculties/${facultet.id}`}>View</Link>
                </div>
                <div>
                  <Link to={`/faculties/edit/${facultet.id}`}>Edit</Link>
                </div>
                <Link
                  to={`/faculties/`}
                  onClick={() => deleteClick(facultet.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultietList;
