import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../../../../components/Content/form/StudentForm";
import { createStudent } from "../../../../services/student";
import { Student } from "../../../../types";


const StudentCreate = () => {
  const navigate = useNavigate();


  const onFormSubmit = (data: Partial<Student> ) => {
    createStudent(data)
      .then((res) => {
        if (res.id) {
          navigate("/students");
        }
      })
   
  };

  return (
    <div>
      <h2>Create student</h2>
      <StudentForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default StudentCreate;
