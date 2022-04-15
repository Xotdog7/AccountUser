import React, { useContext } from "react";

import { Movie } from "../../../types";
import style from "../Content.module.scss";

import MovieItem from "./movieItem/MovieItem";
type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  const listMovie = movies.map((movie) => (
    <MovieItem key={movie.id } movie={movie} />
  ));

  return (
    <div>


      <h3>Home Work 6. Worked with useEffect and Axios</h3>
      <span>Done hover video</span>
      <div className={style.itemsRow}>{listMovie}</div>
    </div>
  );
};

export default MoviesList;
