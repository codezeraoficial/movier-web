export interface UserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
  document: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
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