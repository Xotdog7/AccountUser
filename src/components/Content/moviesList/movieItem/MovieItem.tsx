import React, { createContext, useContext, useState } from "react";
import { Movie } from "../../../../types";


import style from "../../Content.module.scss";
import { StyleButton } from "./MovieButton.style";

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  

  return (
    <div className={style.item}>
      <img src={movie.image} alt={movie.title} />
      <span>{movie.title}</span>
      <span>{movie.description}</span>
      <StyleButton
        selected={!!movie.id }
        background="#C9A66B"
        border="#AF4425"
      >
       Что то там
      </StyleButton>
    </div>
  );
};

export default MovieItem;
