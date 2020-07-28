import React, { createContext, useState, useEffect } from "react";
import {
  UserModel,
} from "../../Interfaces/Models/User/User";
import { CreateUser } from "../../services/User/user.api";

interface SignUpContextData {
  created: boolean;
  signUp: (data: UserModel) => void;
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
}

const SignUpContext = createContext<SignUpContextData>({} as SignUpContextData);

export const SignUpProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);

  async function signUp(data: UserModel) {     
    const response = await CreateUser(data);
    setUser(response);
  }

 

  return (
    <SignUpContext.Provider value={{ created: !!user, signUp, user, setUser }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
