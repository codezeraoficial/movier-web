import React from "react";
import Main from "../design/layout/Main";
import CardContent from "../design/components/cardContent";

const DashBoard: React.FC = () => {
  return (
    <Main>
      <div className="dashboard">
        <h1>Welcome, Leonardo!</h1>
        <div className="dashboard__content">
          <CardContent/>
          <CardContent/>
          <CardContent/>
        </div>
      </div>
    </Main>
  );
};

export default DashBoard;
