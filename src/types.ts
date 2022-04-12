import { ReactChild, ReactNode } from "react";

export interface IState {
  movies: Movie[];
  actors: Actor[];
}

export interface Movie {
  id: number;
  title: string | undefined;
  description: string | undefined;
  duration: number | undefined;
  image: string | undefined;
  trailer: string;
}

export interface Actor {
  objectID: string;
  name: string| undefined;
  rating: number| undefined;
  alternative_name: string| undefined;
  image_path: string| undefined;
}

export interface User {
  login?: string;
  firstname?: string;
  lastname?: string;
  avatar?: string;
}

export interface PropsChildren {
  children: ReactNode;
}
