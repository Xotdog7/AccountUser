import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteStudent, getStudents } from "../../../../services/student";
import { Student } from "../../../../types";
import style from "../../Navbar.module.scss";

const StudentsList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents().then((res) => {
      setStudents(res);
    });
  }, []);

  const deleteClick = (id: string) => {
    setStudents((value) => value.filter((item) => id !== item.id));

    deleteStudent(id);
  };

  return (
    <div className={style.studentMain}>
      <h3>Homework 8. Button deleting & Course editing </h3>
      <h2>Student</h2>
      <Link to="/students/create">Create</Link>
      <table className={style.styledTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.score}</td>
              <td>
                {student.courses?.map((course) => course.name).join(", ")}
              </td>
              <td>
                <div>
                  <Link to={`/students/${student.id}`}>View</Link>
                </div>
                <div>
                  <Link to={`/students/edit/${student.id}`}>Edit</Link>
                </div>
                <Link to={`/students/`} onClick={() => deleteClick(student.id)}>
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

export default StudentsList;
