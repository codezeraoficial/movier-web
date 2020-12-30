import React, {  useContext, useEffect } from "react";
import Main from "../design/layout/Main";
import DashboardContent from "../design/components/dashboardContent";
import AuthContext from "../../../contexts/auth/auth";
import MovieContext from "../../../contexts/movie/movie";
import ModalPay from "../Dialog/ModalPay";

const DashBoard: React.FC = () => {
  const { getMovies } = useContext(MovieContext)
  const { userAuth} = useContext(AuthContext);

  useEffect(() => {
    getMovies();
  }, [])
  


  return (
    <Main>
      <div className="dashboard">
        <h1>Welcome, {userAuth?.user.name}</h1>
        <DashboardContent/>
      </div>
      <ModalPay/>
    </Main>
  );
};

export default DashBoard;
