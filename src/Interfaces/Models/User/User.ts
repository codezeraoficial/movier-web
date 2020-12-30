export interface UserModel {
  name: string;
  email: string;
  password: string;
  document: string;
  phone: string; 
}

export interface UserRequest {
  _id: string;
  name: string;
  email: string;
  password: string;
  document: string;
  phone: string; 
}

export interface UserBuy{  
  id: string
  credits: number;
  movies_id: string[];
}
export interface User{
  id: string;
  name: string;
  email: string;
  credits: number;
  movies_id: string[];
}

export interface UserLoginResponse {
 token: string;
 user: User
}

export interface UserLoginRequest{ 
  email: string;
  password: string;
}

export interface BuyMovie{
  userId: string
  movieId: string
}

export interface BuyInfo{
  hasMovie: boolean;
  hasCredits: boolean;
  credits: number
}



