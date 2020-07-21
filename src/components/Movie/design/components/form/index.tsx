import React from "react";
import {Form as FormSub} from '@rocketseat/unform';

interface FormProps {
  label: string;
  children: React.ReactNode;
  handleSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ label, children, handleSubmit }) => {
  return (
    <FormSub className="form" onSubmit={handleSubmit}>
      <label>{label}</label>
      {children}
    </FormSub>
  );
};

export default Form;
