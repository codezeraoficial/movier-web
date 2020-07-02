import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Movie/LandingPage";
import SingUp from "./components/Movie/SingUp";
import './styles.scss';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} exact path="/" />
      <Route component={SingUp} exact path="/singup" />
    </BrowserRouter>
  );
};

export default Routes;
