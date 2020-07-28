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

export interface User{
  id: string;
  name: string;
  email: string
}

export interface UserLoginResponse {
 token: string;
 user: User
}

export interface UserLoginRequest{ 
  email: string;
  password: string;
}