import React from "react";
import Card from "../card/index";

interface CardSectionProps{
  section: number;
}

const CardSection: React.FC<CardSectionProps> = ({section}) => { 
 
  return (
    <section className="cardSection" id={`section${section}`}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default CardSection;
