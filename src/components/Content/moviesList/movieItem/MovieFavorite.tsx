import React, { FC, useContext } from "react";
import { Movie } from "../../../../types";
import {
  MovieItemContext,
  MovieTypeContext,
} from "../../../Context/movieContextHW4/MovieItemContext";

import style from "../../Content.module.scss";
import { StyleButton } from "./MovieButton.style";

type props = {
  movieFavorite: Movie;
};

const MovieFavorite: FC<props> = ({ movieFavorite }) => {
  const { deleteClick} = useContext(
    MovieItemContext
  ) as MovieTypeContext;

  const onMovieClick = () => {
    deleteClick(movieFavorite.id);
  };
  return (
    <div className={style.item}>
      <img src={movieFavorite.image} alt={movieFavorite.title} />
      <span>{movieFavorite.title}</span>
      <span>{movieFavorite.description}</span>
      <StyleButton
        selected={false}
        background="#C9A66B"
        border="#AF4425"
        onClick={onMovieClick}
      >
        Удалить
      </StyleButton>
    </div>
  );
};
export default MovieFavorite;
