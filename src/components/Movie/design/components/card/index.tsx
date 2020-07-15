import React from "react";

// import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <div className="card">
      <header className="card__header">
        <img src="https://br.web.img2.acsta.net/pictures/20/02/06/21/26/5773795.jpg" alt="cardimage"/>
      </header>
      <footer className="card__footer">
        <h4>Movie: <span>I Still Believe</span></h4>
        <h4>Gender: <span>Drama, Romance</span></h4>
        <h4>Author: <span>Jeremy Camp</span></h4>
        <h4>Release Date: <span>20/04/2020</span></h4>
        <h4>Classification: <span>14</span></h4>
      </footer>
    </div>
  );
};

export default Card;
