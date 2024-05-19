import Axios, { AxiosInstance } from "axios";

/**
 * Creates an instance of Axios with a specified base URL.
 * @param {string} base - The base URL for the Axios instance. Leave empty string for the root URL.
 * @returns {AxiosInstance} The Axios instance.
 */
export const axiosInstance = (base: string): AxiosInstance => {
  const api_url = process.env.REACT_APP_API_URL;

  if (!api_url) {
    throw new Error("REACT_APP_API_URL is not set");
  }

  const axios = Axios.create({
    baseURL: `${api_url}/${base}`,
    timeout: 3000,
  });

  return axios;
};
