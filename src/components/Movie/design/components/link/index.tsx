import React from "react";
import { Link } from "react-router-dom";

interface LinkNavProps {
  label: string;
  nav: string;
}

const LinkNav: React.FC<LinkNavProps> = ({nav, label}) => {
  return (
    <Link to={nav} className="linknav">
      {label}
    </Link>
  );
};

export default LinkNav;
