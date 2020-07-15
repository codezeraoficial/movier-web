import React from "react";
import DefaultLayout from "../design/layout/GetStart";
import Form from "../design/components/form";
import Input from "../design/components/input";
import ButtonSubmit from "../design/components/buttonSubmit";
import LinkNav from "../design/components/link";


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
        <LinkNav label="Back to login" nav="/signin" />
      </Form>
    </DefaultLayout>
  );
};

export default Recover;
