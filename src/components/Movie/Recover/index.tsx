import React from "react";
import DefaultLayout from "../design/defaultLayout";
import Form from "../design/form";
import Input from "../design/input";
import ButtonSubmit from "../design/buttonSubmit";


const Recover: React.FC = () => {
  return (
    <DefaultLayout>
      <Form label="Sign Up">
        <Input placeholder="Your best email" />
        <Input placeholder="Your document (CPF)" />
        <Input placeholder="Your phone (DDD 00000-0000)" />
        <Input placeholder="Your new password" />
        <Input placeholder="Confirm your new password" />
        <ButtonSubmit label="Recover" />
      </Form>
    </DefaultLayout>
  );
};

export default Recover;
