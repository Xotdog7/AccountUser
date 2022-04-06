import React, { useContext } from "react";
import { Movie } from "../../../types";
import style from "../Content.module.scss";
import {
  MovieItemContext,
  MovieTypeContext,
} from "../../Context/movieContextHW4/MovieItemContext";
import MovieItem from "./movieItem/MovieItem";
import MovieFavorite from "./movieItem/MovieFavorite";
type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  const { favorite: selectionMovie } = useContext(
    MovieItemContext
  ) as MovieTypeContext;

  const listMovie = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  const favoiteMovie = selectionMovie
    .filter((movie) => movie.favorite === true)
    .map((movie) => {
      return <MovieFavorite key={movie.id} movieFavorite={movie} />;
    });

  return (
    <div>
      <div className={style.itemsRow}>{listMovie}</div>

      <h1>любимые фильмы:</h1>

      <div className={style.itemsRow}>{favoiteMovie}</div>
    </div>
  );
};

export default MoviesList;
