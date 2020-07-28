import React, { useContext, useState, useEffect } from "react";

import ButtonLink from "../design/components/buttonLink";
import LinkNav from "../design/components/link";
import DefaultLayout from "../design/layout/GetStart";
import SignUpContext from "../../../contexts/user/user";

const LandingPage: React.FC = () => {
  const { setUser } = useContext(SignUpContext);

  useEffect(()=>{
    setUser(null);
  },[])
  return (
    <DefaultLayout>    
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
          <ButtonLink label="Get started!" nav="/signup"/>
          <LinkNav label="I already have an account" nav="/signin"/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LandingPage;
