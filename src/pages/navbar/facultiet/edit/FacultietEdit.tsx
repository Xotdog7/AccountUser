import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultietForm from "../../../../components/Content/form/FacultietForm";
import { editFacultiet, getFacultiet } from "../../../../services/facultet";
import { Facultiet } from "../../../../types";

const FacultietEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [facultet, setFacultet] = useState<Facultiet>();

  console.log("facultet ", facultet);

  useEffect(() => {
    if (!id) {
      return;
    }
    getFacultiet(id).then((res) => {
      setFacultet(res);
    });
  }, [id]);

  const onSubmit = (data: Partial<Facultiet>) => {
    if (!id) {
      return;
    }

    editFacultiet(id, data).then((res) => {
      navigate(`/faculties/${id}`);
    });
  };
  return (
    <div>
      <h2>Edit student</h2>
      {facultet && (
        <FacultietForm initialValues={facultet} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default FacultietEdit;
