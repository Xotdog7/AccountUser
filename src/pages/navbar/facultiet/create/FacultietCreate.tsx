import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultietForm from "../../../../components/Content/form/FacultietForm";
import { createFacultiet } from "../../../../services/facultet";
import { Facultiet } from "../../../../types";

const FacultietCreate = () => {
  const navigate = useNavigate();

  const onFormSubmit = (data: Partial<Facultiet>) => {
    createFacultiet(data).then((res) => {
      if (res.id) {
        navigate("/faculties");
      }
    });
  };

  return (
    <div>
      <h2>Create student</h2>
      <FacultietForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default FacultietCreate;
