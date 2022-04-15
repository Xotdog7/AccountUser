import { getActors } from "../../services/actors";
import { Movie, Actor } from "../../types";
import { getMovies } from "../../services/movies";
import { useEffect, useState } from "react";

export const useData = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const moviesData = await getMovies();
        const actorsData = await getActors();
        setMovies(moviesData);
        setActors(actorsData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return {
    movies: movies,
    actors: actors,
  };
};
