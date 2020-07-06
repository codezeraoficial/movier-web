import React from "react";
import DefaultLayout from "../design/defaultLayout";
import Form from "../design/form";
import Input from "../design/input";
import ButtonSubmit from "../design/buttonSubmit";
import LinkNav from "../design/link";


const SingIn: React.FC = () => {
  return (
    <DefaultLayout>
      <Form label="Sign Up">
        <Input placeholder="Your best email" />
        <Input placeholder="Your best password" />
        <ButtonSubmit label="Register" />
        <LinkNav label="I forget my password" nav="/recover" />
      </Form>
    </DefaultLayout>
  );
};

export default SingIn;
