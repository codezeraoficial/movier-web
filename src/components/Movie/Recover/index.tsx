import React from "react";
import DefaultLayout from "../design/layout/GetStart";
import Form from "../design/components/form";
import Input from "../design/components/input";
import ButtonSubmit from "../design/components/buttonSubmit";
import LinkNav from "../design/components/link";


const Recover: React.FC = () => {
  const handleSubmit = () =>{
    console.log("ola");

  }

  return (
    <DefaultLayout>
      <Form label="Sign Up" handleSubmit={() => handleSubmit}>
        <Input type="email" name="email" placeholder="Your best email" />
        <Input type="text" name="document" placeholder="Your document (CPF)" />
        <Input type="text" name="phone" placeholder="Your phone (DDD 00000-0000)" />
        <Input type="password" name="password" placeholder="Your new password" />
        <Input type="password" name="confirmPassword" placeholder="Confirm your new password" />
        <ButtonSubmit label="Recover" />
        <LinkNav label="Back to login" nav="/signin" />
      </Form>
    </DefaultLayout>
  );
};

export default Recover;
