import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFacultiet } from "../../../../services/facultet";
import { Facultiet } from "../../../../types";

const FacultietDetail = () => {
  const { id } = useParams();
  const [facultet, setFacultet] = useState<Facultiet>();

  console.log("FacultietDetail ", facultet);

  useEffect(() => {
    if (!id) {
      return;
    }
    getFacultiet(id).then((res) => {
      setFacultet(res);
    });
  }, [id]);

  return facultet ? (
    <div>
      <h2>Facultet details {facultet.id}</h2>

      <div>
        <Link to={`/faculties/edit/${facultet.id}`}>Edit</Link>
      </div>
      <div>
        <Link to={`/faculties/`}>Menu</Link>
      </div>
      <ul>
        <li>First name: {facultet.name}</li>
      </ul>
    </div>
  ) : (
    <h2>Facultet not found</h2>
  );
};

export default FacultietDetail;
