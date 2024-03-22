import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const authInterceptor = (req) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) req.headers.Authorization = `Bearer ${accessToken}`;
  return req;
};

export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(authInterceptor);
