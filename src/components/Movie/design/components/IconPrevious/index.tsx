import React from "react";
import { FaAngleLeft } from "react-icons/fa";

interface IconRef {
  section: number;
}

const IconPrevious: React.FC<IconRef> = ({ section }) => {

  return (
    <a href={`#section${section}`}>
      <FaAngleLeft color="#FFF" size={40}/>
    </a>
  );
};

export default IconPrevious;
