import React from "react";

interface ButtonDefaultProps{
  label: string;
  width: number;
  disabled?: boolean;
  click?:  (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({label, width, disabled, click}) => {
return <button onClick={click} type="button" className="buttonDefault" style={{width: width, background: disabled ? '#d0b547' : '#FFCE00'}} disabled={disabled}>{label}</button>;
};

export default ButtonDefault;
