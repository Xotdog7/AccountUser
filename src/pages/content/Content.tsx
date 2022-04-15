import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useData } from "../../components/hooks/useData";
import ActorList from "../../components/Content/actor/actorList/ActorList";
import MoviesList from "../../components/Content/moviesList/MoviesList";
import StudentsList from "../navbar/student/list/StudentList";
import StudentDetails from "../navbar/student/details/StudentDetails";
import StudentCreate from "../navbar/student/create/StudentCreate";
import StudentEdit from "../navbar/student/edit/StudentEdit";
import style from "./Content.module.scss";
import FacultietList from "../navbar/facultiet/list/FacultietList";
import FacultietDetail from "../navbar/facultiet/detail/FacultietDetail";
import FacultietCreate from "../navbar/facultiet/create/FacultietCreate";
import FacultietEdit from "../navbar/facultiet/edit/FacultietEdit";
const Content = () => {
  const { actors, movies } = useData();

  return (
    <div className={style.content}>
      <Routes>
        <Route path="/actor/*" element={<ActorList actors={actors} />} />
        <Route path="/movie/*" element={<MoviesList movies={movies} />} />

        <Route path={"/students"} element={<StudentsList />} />
        <Route path={"/students/:id"} element={<StudentDetails />} />
        <Route path={"/students/create"} element={<StudentCreate />} />
        <Route path={"/students/edit/:id"} element={<StudentEdit />} />


        <Route path={"/faculties"} element={<FacultietList />} />
        <Route path={"/faculties/:id"} element={<FacultietDetail />} />
        <Route path={"/faculties/create"} element={<FacultietCreate />} />
        <Route path={"/faculties/edit/:id"} element={<FacultietEdit />} />
      </Routes>
    </div>
  );
};

export default Content;
