import React from "react";
import DefaultLayout from "../design/layout/GetStart";
import Form from "../design/components/form";
import Input from "../design/components/input";
import LinkNav from "../design/components/link";
import ButtonSubmit from "../design/components/buttonSubmit";

const SingUp: React.FC = () => {
  const handleSubmit = () =>{
    console.log("ola");

  }

  return (
    <DefaultLayout>
      <Form label="Sign Up" handleSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your name" />
        <Input type="email" name="email" placeholder="Your best email" />
        <Input type="password" name="password" placeholder="Your best password" />
        <Input type="text" name="cpf" placeholder="Your document (CPF)" />
        <Input type="phone" name="phone" placeholder="Your phone (DDD 00000-0000)" />
        <ButtonSubmit label="Register" />
        <LinkNav label="I already have an account" nav="/signin" />
      </Form>
    </DefaultLayout>
  );
};

export default SingUp;
