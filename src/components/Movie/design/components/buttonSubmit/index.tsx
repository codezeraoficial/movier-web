import React from "react";

interface ButtonSubmitProps{
  label: string;
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({label}) => {
return <button type="submit" className="buttonSubmit">{label}</button>;
};

export default ButtonSubmit;
