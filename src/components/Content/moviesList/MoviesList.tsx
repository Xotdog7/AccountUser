import React, { useContext } from "react";
import { Movie } from "../../../types";
import style from "../Content.module.scss";

import MovieItem from "./movieItem/MovieItem";
type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  const listMovie = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <div className={style.itemsRow}>{listMovie}</div>

      <h1>Favorite film:</h1>
    </div>
  );
};

export default MoviesList;
