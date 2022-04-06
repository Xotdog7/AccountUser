import React, { createContext, useContext, useState } from "react";
import { Movie } from "../../../../types";
import {
  MovieItemContext,
  MovieTypeContext,
} from "../../../Context/movieContextHW4/MovieItemContext";

import style from "../../Content.module.scss";
import { StyleButton } from "./MovieButton.style";

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const {
    movie: selectMovie,
    favoriteClick,
    activeMovie,
  } = useContext(MovieItemContext) as MovieTypeContext;

  const onMovieClick = () => {
    favoriteClick(movie.id);
    activeMovie(movie);
  };

  return (
    <div className={style.item}>
      <img src={movie.image} alt={movie.title} />
      <span>{movie.title}</span>
      <span>{movie.description}</span>
      <StyleButton
        selected={!!selectMovie && movie.id === selectMovie.id}
        background="#C9A66B"
        border="#AF4425"
        onClick={onMovieClick}
      >
        {!!selectMovie && movie.id === selectMovie.id
          ? "Добавлено"
          : "Добавить"}
      </StyleButton>
    </div>
  );
};

export default MovieItem;
