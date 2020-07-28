import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../components/Movie/LandingPage";
import SignUp from "../components/Movie/SignUp";
import "../styles.scss";
import SignIn from "../components/Movie/SignIn";
import Recover from "../components/Movie/Recover";
import DashBoard from "../components/Movie/DashBoard";
import PrivateRoute from "./PrivateRoute";

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={SignUp}  path="/signup" />
        <Route component={SignIn}  path="/signin" />
        <Route component={Recover}  path="/recover" />
        <PrivateRoute component={DashBoard}  path="/dashboard"/>
      </Switch>
  );
};

export default Routes;
