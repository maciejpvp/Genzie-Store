// api.ts
import axios, { AxiosResponse } from "axios";
import {
  ProductResponseType,
  OneProductResponseType,
  DefaultResponseType,
} from "./types";

const apiClient = axios.create({
  baseURL: "http://192.168.1.15:8000/api/v1/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async <T>(
  endpoint: string,
  params?: Record<string, string | number | boolean | null>
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchItemsByCategory = async (
  query: string
): Promise<ProductResponseType> => {
  const endpoint = `/items${query}`;
  return getData<ProductResponseType>(endpoint);
};

export const fetchItem = async (
  id: string
): Promise<OneProductResponseType> => {
  const endpoint = `/items/${id}`;
  return getData<OneProductResponseType>(endpoint);
};

export const signup = async (
  name: string,
  email: string,
  password: string
): Promise<DefaultResponseType> => {
  const response = await apiClient.post("/users/signup", {
    name,
    email,
    password,
  });
  return response.data;
};

export const verifyEmail = async (
  email: string,
  code: string
): Promise<DefaultResponseType> => {
  console.log("123123213");
  const response = await apiClient.post("/users/verifyEmail", {
    email,
    code,
  });
  return response.data;
};

export const resentEmailVerifyCode = async (
  email: string
): Promise<DefaultResponseType> => {
  const response = await apiClient.post("/users/resendVerifyEmailCode", {
    email,
  });
  return response.data;
};

export const login = async (
  email: string,
  password: string
): Promise<DefaultResponseType> => {
  const response = await apiClient.post("/users/login", {
    email,
    password,
  });
  return response.data;
};
