import React, { useContext } from "react";
import DefaultLayout from "../design/layout/GetStart";
import Form from "../design/components/form";
import Input from "../design/components/input";
import ButtonSubmit from "../design/components/buttonSubmit";
import LinkNav from "../design/components/link";
import { UserLoginRequest } from "../../../Interfaces/Models/User/User";
import AuthContext from "../../../contexts/auth/auth";


const SingIn: React.FC = () => {
  const {signIn, signed} = useContext(AuthContext);

  console.log(signed);
  
  const handleSubmitLogin = (data: UserLoginRequest) =>{
     signIn(data);
    
  }

  return (
    <DefaultLayout>
      <Form label="Sign In" handleSubmit={handleSubmitLogin}>
        <Input type="email" name="email"  placeholder="Your best email" />
        <Input type="password" name="password" placeholder="Your best password" />
        <ButtonSubmit label="Login" />
        <LinkNav label="I forget my password" nav="/recover" />
      </Form>
    </DefaultLayout>
  );
};

export default SingIn;
