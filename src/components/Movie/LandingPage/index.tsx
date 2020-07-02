import React from "react";

import logo from '../../../res/assets/movier.svg';
import ButtonLink from "../design/buttonLink";
import LinkNav from "../design/link";

const LandingPage: React.FC = () => {
  return (
    <div className="landing">
      <div className="landing__logo">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="landing__presents">
        <div className="landing__presents-text--box">
          <h1>
            GO TO THE <span>MOVIE THEATER</span>...
          </h1>
          <h1>
            WITHOUT <span>LEAVING HOME</span>.
          </h1>

          <div>
            <p>
              Launch films at prices that fit in your pocket, and the best,
              watching in the comfort of your home.
            </p>
          </div>
          <ButtonLink label="Get started!" nav="/singup"/>
          <LinkNav label="I already have an account" nav="/signin"/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
