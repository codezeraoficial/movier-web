import React from "react";
import DefaultLayout from "../design/defaultLayout";
import Form from "../design/form";
import Input from "../design/input";
import LinkNav from "../design/link";
import ButtonSubmit from "../design/buttonSubmit";

const SingUp: React.FC = () => {
  return (
    <DefaultLayout>
      <Form label="Sign Up">
        <Input placeholder="Your name" />
        <Input placeholder="Your best email" />
        <Input placeholder="Your best password" />
        <Input placeholder="Your document (CPF)" />
        <Input placeholder="Your phone (DDD 00000-0000)" />
        <ButtonSubmit label="Register" />
        <LinkNav label="I already have an account" nav="/signin" />
      </Form>
    </DefaultLayout>
  );
};

export default SingUp;
