import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../../../../components/Content/form/StudentForm";
import { editStudent, getStudent } from "../../../../services/student";
import { Student } from "../../../../types";
const StudentEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [students, setStudent] = useState<Student>();
  
    useEffect(() => {
      if (!id) {
        return;
      }
      getStudent(id).then((res) => {
        setStudent(res);
      });
    }, [id]);
  
    const onSubmit = (data: Partial<Student>) => {
      if (!id) {
        return;
      }
  
      editStudent(id, data).then((res) => {
        navigate(`/students/${id}`);
      });
    };
  
    return (
      <div>
        <h2>Edit student</h2>
        {students && <StudentForm initialValues={students} onSubmit={onSubmit} />}
      </div>
    );
  };
  
  export default StudentEdit;
  