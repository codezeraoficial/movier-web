import React, { createContext, useState, useEffect, useCallback } from "react";
import { Login } from "../../services/Auth/LoginApi";
import useLocalStorage from '../../hooks/useLocalStorage';
import {axiosInstance} from '../../services/ServiceBase/index';
import {
  UserLoginRequest,
  UserLoginResponse,
} from "../../Interfaces/Models/User/User";

interface AuthContextData {
  signed: boolean;
  user: UserLoginResponse | null;
  signIn: (auth: UserLoginRequest) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage('@authApp: user');
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage('@authApp: token');    
  const [user, setUser] = useState<UserLoginResponse | null>(null);

  useEffect(()=>{
    if(storageUser && storageToken){
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
      setUser(storageUser);    
    }
  },[])


  async function signIn(auth: UserLoginRequest) {     
    const response = await Login(auth);
    setUser(response);
    setStorageUser(response);
    setStorageToken(response?.token);  
    
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${response?.token}`;
  }

  const signOut = useCallback(()=>{
    removeStorageUser();
    removeStorageToken();
    setUser(null);
  },[])

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
