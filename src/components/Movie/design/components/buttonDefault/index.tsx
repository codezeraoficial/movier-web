import React from "react";

interface ButtonDefaultProps{
  label: string;
  width: number;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({label, width}) => {
return <button type="button" className="buttonDefault" style={{width: width}}>{label}</button>;
};

export default ButtonDefault;
