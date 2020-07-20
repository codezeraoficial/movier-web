import React from "react";
import { FiPlayCircle } from "react-icons/fi";

import { Container } from "./styles/styles";


const Card: React.FC = () => {
  return (
    <div className="card">
      <header className="card__header">
        <Container
          src={"https://ap.imagensbrasil.org/images/2017/12/06/serie-Dark.jpg"}
        >
          <FiPlayCircle />
        </Container>
      </header>
      <footer className="card__footer">
        <h4>
          Movie: <span>Dark</span>
        </h4>
        <h4>
          Gender: <span>Drama, Suspense</span>
        </h4>
        <h4>
          Author: <span>Ronny Schalk</span>
        </h4>
        <h4>
          Release Date: <span>20/04/2020</span>
        </h4>
        <h4>
          Classification: <span>14</span>
        </h4>
      </footer>
    </div>
  );
};

export default Card;
