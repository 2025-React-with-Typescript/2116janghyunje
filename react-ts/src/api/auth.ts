// src/api/auth.ts
import http from "./http";

type RegisterInput = {
  username: string;
  password: string;
  nickname: string;
  email: string;
};

type LoginInput = {
  username: string;
  password: string;
};

// 회원가입
export async function register(input: RegisterInput) {
  const { data } = await http.post("/auth/register", {
    username: input.username,
    password: input.password,
    nickname: input.nickname,
    email: input.email,
  });
  return data; // 백엔드가 ApiResponse<T>면 data.data로 실제 페이로드 접근
}

// 로그인
export async function login(input: LoginInput) {
  const { data } = await http.post("/auth/login", {
    username: input.username,
    password: input.password,
  });

  // 백엔드 응답 구조에 맞춰 accessToken 추출 (여기서는 안전하게 여러 키 시도)
  const accessToken =
    data?.data?.accessToken ?? data?.accessToken ?? data?.token;

  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  return data;
}

// 로그아웃(클라이언트 측)
export function logout() {
  localStorage.removeItem("accessToken");
}