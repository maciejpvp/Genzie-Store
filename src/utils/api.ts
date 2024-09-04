// api.ts
import axios, { AxiosResponse } from "axios";
import { ProductResponseType, OneProductResponseType } from "./types";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1/", // Bazowy URL API
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
