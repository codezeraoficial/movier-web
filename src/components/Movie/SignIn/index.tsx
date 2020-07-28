import React, { useContext, useCallback } from "react";
import DefaultLayout from "../design/layout/GetStart";
import Form from "../design/components/form";
import Input from "../design/components/input";
import ButtonSubmit from "../design/components/buttonSubmit";
import LinkNav from "../design/components/link";
import { UserLoginRequest } from "../../../Interfaces/Models/User/User";
import AuthContext from "../../../contexts/auth/auth";
import { Redirect } from "react-router-dom";

const SingIn: React.FC = () => {
  const { signIn, signed } = useContext(AuthContext);

  const handleSubmitLogin = useCallback(
    (data: UserLoginRequest) => {
      signIn(data);
    },
    [signIn]
  );

  return (
    <>
      {signed ? (
        <Redirect to="./dashboard" />
      ) : (
        <DefaultLayout>
          <Form label="Sign In" handleSubmit={handleSubmitLogin}>
            <Input type="email" name="email" placeholder="Your best email" />
            <Input
              type="password"
              name="password"
              placeholder="Your best password"
            />
            <ButtonSubmit label="Login" />
            <LinkNav label="I forget my password" nav="/recover" />
          </Form>
        </DefaultLayout>
      )}
    </>
  );
};

export default SingIn;
