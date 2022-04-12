import axios, { AxiosResponse } from "axios";
import { Movie } from "../types";

export const getMovies = (): Promise<Movie[]> => {
  return axios
    .get<Movie[]>(
      "https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies.json"
    )
    .then((res) => res.data);
};

export const getMovie = (id: string): Promise<Movie> => {
  return axios
    .get<Movie>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies/${id}`
    )
    .then((res) => res.data);
};

export const createMovie = (data: Movie): Promise<Movie> => {
  return axios
    .post<Movie>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies`,
      data
    )
    .then((res) => res.data);
};

export const editMovie = (id: string, data: Movie): Promise<Movie> => {
  return axios
    .put<Movie>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies/${id}`,
      data
    )
    .then((res) => res.data);
};
