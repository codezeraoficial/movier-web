import React, { createContext, useState } from "react";
import { Login } from "../../services/Auth/LoginApi";
import {
  UserLoginRequest,
  UserLoginResponse,
} from "../../Interfaces/Models/User/User";

interface AuthContextData {
  signed: boolean;
  user: UserLoginResponse | null;
  signIn: (auth: UserLoginRequest) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserLoginResponse | null>(null);

  async function signIn(auth: UserLoginRequest) {     
    const response = await Login(auth);
    setUser(response);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
