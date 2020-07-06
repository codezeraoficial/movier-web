import React from "react";


interface FormProps {
  label: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ label, children }) => {
  return (
    <form className="form">
      <label>{label}</label>
      {children}
    </form>
  );
};

export default Form;
