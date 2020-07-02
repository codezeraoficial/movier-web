import React from "react";
import { Link } from "react-router-dom";

interface ButtonNavProps {
  label: string;
  nav: string;
}

const ButtonLink: React.FC<ButtonNavProps> = ({label, nav}) => {
  return (
    <Link to={nav} className="buttonLink">
      {label}
    </Link>
  );
};

export default ButtonLink;
