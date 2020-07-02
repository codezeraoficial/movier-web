import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Movie/LandingPage";
import './styles.scss';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} exact path="/" />
    </BrowserRouter>
  );
};

export default Routes;
