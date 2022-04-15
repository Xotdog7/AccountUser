import React, { createContext, useContext, useState } from "react";
import ReactPlayer from "react-player";
import { Movie } from "../../../../types";

import style from "../../Content.module.scss";
import { StyleButton } from "./MovieButton.style";

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const [hover, setHover] = useState(false);

  const hoverVideo = hover ? (
    <ReactPlayer
      url={`${movie.trailer}`}
      playing={true}
      width="150px"
      height="150px"
    />
  ) : (
    <img src={movie.image} alt={movie.title} />
  );

  return (
    <div
      className={style.item}
      onMouseEnter={(e: React.MouseEvent) => setHover(true)}
      onMouseLeave={(e: React.MouseEvent) => setHover(false)}
    >
      {hoverVideo}
      <span>{movie.title}</span>
      <span>{movie.description}</span>
      <StyleButton selected={!!!movie.id} background="#C9A66B" border="#AF4425">
        Кнопка
      </StyleButton>
    </div>
  );
};

export default MovieItem;
