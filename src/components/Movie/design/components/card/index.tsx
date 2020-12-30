import React, { useContext } from "react";
import { FiPlayCircle } from "react-icons/fi";
import ModalContext from "../../../../../contexts/modal/modal";
import { MovieModel } from "../../../../../Interfaces/Models/Movier/Movie";

import { Container } from "./styles/styles";

interface Movie {
  movie: MovieModel
}
const Card: React.FC<Movie> = ({ movie }) => {
  const { name, image_url,  gender, classification, release_date, author, _id } = movie;
  const { openModalPay } = useContext(ModalContext);

  return (
    <div className="card">
      <header className="card__header">
        <Container src={image_url} onClick={() => openModalPay(_id)}>
          <FiPlayCircle />
        </Container>
      </header>
      <footer className="card__footer">
        <h4>
          Movie: <span>{name}</span>
        </h4>
        <h4>
          Gender: <span>{gender}</span>
        </h4>
        <h4>
          Author: <span>{author}</span>
        </h4>
        <h4>
          Release Date: <span>{release_date}</span>
        </h4>
        <h4>
          Classification: <span>{classification}</span>
        </h4>
      </footer>
    </div>
  );
};

export default Card;
