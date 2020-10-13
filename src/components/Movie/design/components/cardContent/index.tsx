import React from "react";
import CardSection from "../cardSection";

interface CardContentProps{
  margin: number;
  widthContent: number;
}
const CardContent: React.FC<CardContentProps> = ({margin, widthContent}) => {
  return (
    <div className="cardContent" style={{width: widthContent, marginLeft: margin}}>     
    </div>
  );
};

export default CardContent;
