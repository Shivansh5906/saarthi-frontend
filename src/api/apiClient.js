import axios from "axios";

const api = axios.create({
  baseURL: "https://saarthi-bank-backend-production.up.railway.app"
});

// ✅ Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token; // ✅ Correct
  }
  return config;
});

export default api;
