import React, { useContext } from "react";
import MovieContext from "../../../../../contexts/movie/movie";
import Card from "../card/index";


const CardSection: React.FC = () => {
  const { movies } = useContext(MovieContext)
  return (
    <section>
      
    </section>
  );
};

export default CardSection;
