import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Movie/LandingPage";
import SignUp from "./components/Movie/SignUp";
import './styles.scss';
import SignIn from "./components/Movie/SignIn";
import Recover from "./components/Movie/Recover";
import DashBoard from "./components/Movie/DashBoard";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} exact path="/" />
      <Route component={SignUp} exact path="/signup" />
      <Route component={SignIn} exact path="/signin" />
      <Route component={Recover} exact path="/recover" />
      <Route component={DashBoard} exact path="/dashboard" />
    </BrowserRouter>
  );
};

export default Routes;
