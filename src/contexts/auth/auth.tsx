import React, { createContext, useState, useEffect, useCallback } from "react";
import { Login } from "../../services/Auth/LoginApi";
import useLocalStorage from '../../hooks/useLocalStorage';
import { axiosInstance } from '../../services/ServiceBase/index';
import {
  User,
  UserBuy,
  UserLoginRequest,
  UserLoginResponse,
} from "../../Interfaces/Models/User/User";

interface AuthContextData {
  signed: boolean;
  userAuth: UserLoginResponse | null;
  setUserAuth: (user: UserLoginResponse | null ) => void;
  setStorageUser: any;
  userData: User;
  setUserData: (user: User) => void;
  userBuy: UserBuy;
  signIn: (auth: UserLoginRequest) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage('@authApp: user');
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage('@authApp: token');
  const [userAuth, setUserAuth] = useState<UserLoginResponse | null>(null);
  const [userBuy, setUserBuy] = useState<UserBuy>({} as UserBuy);
  const [userData, setUserData] = useState({} as User);

  useEffect(() => {
    if (storageUser && storageToken) {
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
      setUserAuth(storageUser);
    }
  }, [])

  useEffect(() => {
    if (userAuth?.user) {
      const { credits, movies_id, id } = userAuth?.user;
      const userBuy = {
        credits: credits,
        movies_id: movies_id,
        id: id
      } as UserBuy
      setUserBuy(userBuy)

      console.log(userAuth);
      
    }
    
  }, [userAuth])


  async function signIn(auth: UserLoginRequest) {
    const response = await Login(auth);
    if (response?.user) {
      setUserAuth(response);
      setStorageUser(response);
      setStorageToken(response?.token);
    }


    axiosInstance.defaults.headers['Authorization'] = `Bearer ${response?.token}`;
  }

  const signOut = useCallback(() => {
    removeStorageUser();
    removeStorageToken();
    setUserAuth(null);
  }, [])

  return (
    <AuthContext.Provider value={{ signed: !!userAuth, userAuth, signIn, signOut, userBuy, userData, setUserData, setUserAuth, setStorageUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
