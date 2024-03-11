import { instance } from "./axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const requestSignUp = async (userInfo) => {
  try {
    const res = await instance.post("register", userInfo);
    return "회원가입에 성공하셨습니다.";
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const requestLogin = async (userInfo) => {
  try {
    const res = await instance.post("login", userInfo);
    const { token } = res.data;
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3540); // 현재 시간에 분을 더해 만료 시간 설정
    cookie.set("token", `Bearer ${token}`, {
      path: "/",
      expires: time,
    });
    return "로그인 완료했습니다.";
  } catch (error) {
    console.log(error);
    return Promise.reject(error.response.data.message);
  }
};

export const requestUserCheck = async () => {
  const token = cookie.get("token");
  try {
    const res = await instance.get("user", {
      headers: { authorization: token },
    });
    const { statusText } = res;
    return statusText;
  } catch (error) {}
};
