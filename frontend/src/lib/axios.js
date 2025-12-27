import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-wine-chi.vercel.app/api",
  withCredentials: true,
});
