import React from "react";
import DefaultLayout from "../design/defaultLayout";
import Form from "../design/form";
import Input from "../design/input";
import LinkNav from "../design/link";

const SingUp: React.FC = () => {
  return (
    <DefaultLayout>
      <Form label="Sign Up">
        <Input placeholder="Your name" />
        <Input placeholder="Your best email" />
        <Input placeholder="Your best password" />
        <Input placeholder="Your document (CPF)" />
        <Input placeholder="Your phone (DDD 00000-0000)" />
      </Form>
    </DefaultLayout>
  );
};

export default SingUp;
