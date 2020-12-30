import React, { createContext, useState, useEffect, useContext } from "react";
import {
  BuyInfo,
  BuyMovie,
  User,
  UserBuy,
  UserModel,
} from "../../Interfaces/Models/User/User";
import { UserBuyMovie, CreateUser } from "../../services/User/user.api";
import AuthContext from "../auth/auth";

interface SignUpContextData {
  created: boolean;
  signUp: (data: UserModel) => void;
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
  buyMovie: (userId: string, movieId: string) => Promise<void>;
}

const SignUpContext = createContext<SignUpContextData>({} as SignUpContextData);

export const SignUpProvider: React.FC = ({ children }) => {
  const {setUserAuth, userAuth, setStorageUser} = useContext(AuthContext);
  const [user, setUser] = useState<UserModel | null>(null);

  async function signUp(data: UserModel) {     
    const response = await CreateUser(data);
    setUser(response);
  } 

  
  async function buyMovie(userId: string, movieId: string){
    
    const userBuy = {
      userId: userId,
      movieId: movieId
    } as BuyMovie

    const response = await UserBuyMovie(userBuy);  

    if(response){
      const {credits, movies_id} = response;
      if(userAuth){

      
        userAuth.user.credits = credits;
        userAuth.user.movies_id = movies_id;
      }
    }

  }


  return (
    <SignUpContext.Provider value={{ created: !!user, signUp, user, setUser,  buyMovie }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
