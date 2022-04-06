import React, { FC, ReactNode, useState } from "react";
import { movies } from "../../../mock";
import { Movie, PropsChildren } from "../../../types";
import { MovieItemContext } from "./MovieItemContext";

const MovieItemContextProvider: FC<PropsChildren> = ({ children }) => {
  const [favorite, favoriteState] = useState<Movie[]>(movies);
  const [movie, movieState] = useState<Movie | null>(null);

  const favoriteClick = (id: number) => {
    const allMovie = [...favorite];
    const indexMovie = allMovie.findIndex((item) => item.id === id);
    allMovie[indexMovie].favorite = true;
    favoriteState(allMovie);
  };

  const deleteClick = (id: number) => {
    const allMovie = [...favorite];
    const indexMovie = allMovie.findIndex((item) => item.id === id);
    allMovie[indexMovie].favorite = false;
    favoriteState(allMovie);
  };

  const activeMovie = (movie: Movie | null) => {
    movieState(movie);
  };
  return (
    <MovieItemContext.Provider
      value={{ favorite, favoriteClick, deleteClick, movie, activeMovie }}
    >
      {children}
    </MovieItemContext.Provider>
  );
};

export default MovieItemContextProvider;
