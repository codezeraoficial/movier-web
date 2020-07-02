import React from "react";
import logo from "../../../../res/assets/movier.svg";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="defaultLayout">
      <div className="defaultLayout__logo">
        <img src={logo} alt="Logo" />
      </div>
      {children}
    </div>
  );
};

export default DefaultLayout;
