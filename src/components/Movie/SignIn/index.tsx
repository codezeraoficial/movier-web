import React from "react";
import DefaultLayout from "../design/layout/GetStart";
import Form from "../design/components/form";
import Input from "../design/components/input";
import ButtonSubmit from "../design/components/buttonSubmit";
import LinkNav from "../design/components/link";


const SingIn: React.FC = () => {
  return (
    <DefaultLayout>
      <Form label="Sign Up">
        <Input placeholder="Your best email" />
        <Input placeholder="Your best password" />
        <ButtonSubmit label="Login" />
        <LinkNav label="I forget my password" nav="/recover" />
      </Form>
    </DefaultLayout>
  );
};

export default SingIn;
