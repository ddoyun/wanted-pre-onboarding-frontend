import { instance } from "./instance";

// 회원가입
export const signUpApi = async signUpData => {
  const res = await instance.post("/auth/signup", signUpData);
  return res;
}

// 로그인
export const signInApi = async signInData => {
  const res = await instance.post("/auth/signin", signInData);
  return res;
}