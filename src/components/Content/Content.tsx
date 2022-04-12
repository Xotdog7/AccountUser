import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useData } from "../hooks/useData";
import ActorList from "./actor/actorList/ActorList";
import MoviesList from "./moviesList/MoviesList";
const Content = () => {

 const {actors, movies} = useData();

 console.log("Content ", movies);
 

  return (
    <div>
        <Routes>
          <Route path="/actor/*" element={<ActorList actors={actors} />} />

          <Route path="/movie/*" element={<MoviesList movies={movies} />} />
        </Routes>
    </div>
  );
};

export default Content;
