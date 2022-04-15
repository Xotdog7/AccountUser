import React, { FC, useState } from "react";
import { Facultiet } from "../../../types";

type Props = {
  initialValues?: Partial<Facultiet>;
  onSubmit: (data: Partial<Facultiet>) => void;
};
const FacultietForm: FC<Props> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState<Partial<Facultiet>>(
    initialValues ?? {
      name: "",
    }
  );

  const changeField = (fieldName: keyof Facultiet) => {
    return (e: any) => {
      setValues((v) => ({ ...v, [fieldName]: e.target.value }));
    };
  };

  const sendForm = () => {
    onSubmit(values);
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type={"text"}
          value={values?.name}
          onChange={changeField("name")}
        />
      </div>

      <button onClick={sendForm}>Submit</button>
    </div>
  );
};

export default FacultietForm;
