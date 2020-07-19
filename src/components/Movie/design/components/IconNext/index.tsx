import React from 'react';

import { FaAngleRight } from "react-icons/fa";

interface IconRef{
  section: number;
}

const IconNext: React.FC<IconRef> = ({section}) => { 
  return <a href={`#section${section}`}><FaAngleRight color="#FFF" size={40}/></a>;
}


export default IconNext;