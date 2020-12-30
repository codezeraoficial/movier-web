import React from "react";
import { Link } from "react-router-dom";

interface ButtonNavProps {
  label: string;
  nav: string;
  width?: number;
  disabled?: boolean;
}

const ButtonLink: React.FC<ButtonNavProps> = ({ label, nav, width, disabled }) => {
  return (
    disabled ?
      <span className="buttonLink" style={{ width: width, background: disabled ? '#d0b547' : '#FFCE00' }}>
        {label}
      </span>
      :
      <Link to={nav} className="buttonLink" style={{ width: width ? width : 352 }}>
        {label}
      </Link>
  );
};

export default ButtonLink;
