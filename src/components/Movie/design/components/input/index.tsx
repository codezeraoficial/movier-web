import React from "react";
import {Input as InputSub} from '@rocketseat/unform';

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, name, type }) => {
  return <InputSub name={name} type={type} placeholder={placeholder} className="input" />;
};

export default Input;
