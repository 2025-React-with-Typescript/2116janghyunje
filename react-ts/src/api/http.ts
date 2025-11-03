// src/api/http.ts
// 공용 Axios 인스턴스 (Vite 프록시로 /api → http://localhost:2114)
import axios from "axios";

const http = axios.create({
  baseURL: "/api",
  withCredentials: false, // 쿠키 인증이면 true
});

// 요청 전 토큰 자동 첨부
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;