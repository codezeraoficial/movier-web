import React from "react";
import ButtonSubmit from "../buttonSubmit";
import LinkNav from "../link";

interface FormProps {
  label: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ label, children }) => {
  return (
    <form className="form">
      <label>{label}</label>
      {children}
      <ButtonSubmit label="Register" />
      <LinkNav label="I already have an account" nav="/signin" />
    </form>
  );
};

export default Form;
