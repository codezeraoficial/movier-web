import React from "react";
import logo from "../../../../../res/assets/movier.svg";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const Main: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mainLayout">
      <div className="mainLayout__logo">
        <img src={logo} alt="Logo" />
      </div>
      {children}
    </div>
  );
};

export default Main;
