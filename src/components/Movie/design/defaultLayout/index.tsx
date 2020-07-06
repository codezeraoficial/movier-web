import React from "react";
import logo from "../../../../res/assets/movier.svg";
import { Link } from "react-router-dom";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="defaultLayout">
      <div className="defaultLayout__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DefaultLayout;
