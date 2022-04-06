import { type } from "@testing-library/user-event/dist/type";
import React, { createContext } from "react";
import { Movie } from "../../../types";

export type MovieTypeContext = {
  favorite: Movie[];
  movie?: Movie | null;
  favoriteClick: (id: number) => void;
  deleteClick: (id: number) => void;
  activeMovie: (movie: Movie | null) => void;
};

export const MovieItemContext = createContext<MovieTypeContext | null>(null);
