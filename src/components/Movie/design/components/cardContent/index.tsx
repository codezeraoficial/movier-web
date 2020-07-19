import React from "react";
import CardSection from "../cardSection";

interface CardContentProps{
  section: number;
}

const CardContent: React.FC<CardContentProps> = ({section}) => {

  return (
    <div className="cardContent">     
      <CardSection section={1} />
      <CardSection section={2} />
      <CardSection section={3} />     
    </div>
  );
};

export default CardContent;
