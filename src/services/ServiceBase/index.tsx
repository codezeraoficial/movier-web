import React from "react";

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
import { ApiResponse } from "../../Interfaces/Resources/Api/ApiResponse";
import enviroment from "../../Interfaces/Resources/Env/Enviroment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.movierurl,
  timeout: 30000
})

export async function get<TResponse>
(endPoint: string, params?: any): Promise<ApiResponse<TResponse>>{
  const result: AxiosResponse<TResponse> = await axiosInstance.get<TResponse>(endPoint,  {params: params});
  const response : ApiResponse<TResponse> ={
    data: result.data,
    status: result.status
  }
  return response;
}

export async function post<TRequest, TResponse>(endPoint: string, postObject: TRequest): Promise<ApiResponse<TResponse>>{
  const result: AxiosResponse<TResponse> = await axiosInstance.post<TResponse>(endPoint, postObject);
  const response: ApiResponse<TResponse> = {
    data: result.data,
    status: result.status
  };
  return (response);
}

export async function put<TRequest, TResponse>(endPoint: string, postObject: TRequest): Promise<ApiResponse<TResponse>>{
  const result: AxiosResponse<TResponse> = await axiosInstance.put<TResponse>(endPoint, postObject);
  const response: ApiResponse<TResponse> = {
    data: result.data,
    status: result.status
  };
  return (response);
}

export async function remove<TResponse>(endPoint: string, params?: any): Promise<ApiResponse<TResponse>> {
  let result: AxiosResponse<TResponse> = await axiosInstance.delete<TResponse>(endPoint, { params: params })
  let response: ApiResponse<TResponse> = { data: result.data, status: result.status }
  return (response)
}