import { Route, Routes } from "react-router-dom";
import { actors, movies } from "../../mock";
import MovieItemContextProvider from "../Context/movieContextHW4/MovieItemContextProvider";
import ActorList from "./actorList/ActorList";
import MoviesList from "./moviesList/MoviesList";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/actor/*" element={<ActorList actors={actors} />}></Route>

        <Route
          path="/movie/*"
          element={
            <MovieItemContextProvider>
              <MoviesList movies={movies} />
            </MovieItemContextProvider>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Content;
