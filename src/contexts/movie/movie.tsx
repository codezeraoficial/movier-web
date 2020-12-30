import React, { createContext, useState } from "react";
import { MovieModel } from "../../Interfaces/Models/Movier/Movie";
import { GetMovies } from "../../services/Movie/Movie";

interface MovieContextData {
  getMovies: () => void;
  movies: MovieModel[];
  movie: MovieModel;
  setMovies: (movie: MovieModel[]) => void;
  setMovie: (movie: MovieModel) => void;
  setBackdropMovie: (backdropMovie: boolean) => void;
  backdropMovie: boolean;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export const MovieProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [movie, setMovie] = useState<MovieModel>({} as MovieModel);
  const [backdropMovie, setBackdropMovie] = useState<boolean>(false);

  async function getMovies() {     
    const response = await GetMovies();    
    if(response){
      setMovies(response);
    }
  }

 

  return (
    <MovieContext.Provider value={{getMovies, movies, setMovies, setMovie, movie, backdropMovie, setBackdropMovie}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
