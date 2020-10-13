import React, { createContext, useState } from "react";
import { MovieModel } from "../../Interfaces/Models/Movier/Movie";
import { GetMovies } from "../../services/Movie/Movie";

interface MovieContextData {
  getMovies: () => void;
  movies: MovieModel[];
  setMovie: (movie: MovieModel[]) => void;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export const MovieProvider: React.FC = ({ children }) => {
  const [movies, setMovie] = useState<MovieModel[]>([]);

  async function getMovies() {     
    const response = await GetMovies();    
    if(response){
      setMovie(response);
    }
  }

 

  return (
    <MovieContext.Provider value={{getMovies, movies, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
