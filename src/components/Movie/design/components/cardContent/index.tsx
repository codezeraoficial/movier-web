import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Card from "../card";

const CardContent: React.FC = () => {
  return (
    <div className="cardContent">
      <BsChevronLeft/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <BsChevronRight />
    </div>
  );
};

export default CardContent;
