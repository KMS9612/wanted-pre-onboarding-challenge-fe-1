import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function useAuth() {
  const router = useRouter();
  /** 로그인api 호출하는 함수 (email,password, SuccessMessage, SuccessRouting, ErrorMessage) */
  const login = async (email: string, password: string, SuccessMessage: string, SuccessRouting: string, ErrorMessage: string) => {
    if (!email || !password) return;
    await axios
      .post(`http://localhost:8080/users/login`, {
        email,
        password,
      })
      .then((response) => {
        alert(SuccessMessage);
        const TOKEN = response.data.token;
        localStorage.setItem("Token", TOKEN);
        router.push(SuccessRouting);
      })
      .catch((error) => {
        alert(ErrorMessage);
      });
  };

  /** 회원가입 Api 호출 (Email, Password, SuccessMessage, ErrorMessage) */
  const signin = async (email: string, password: string, SuccessMessage: string, SuccessRouting: string, ErrorMessage: string) => {
    if (!email || !password) return;

    await axios
      .post(`http://localhost:8080/users/create`, {
        email,
        password,
      })
      .then((response) => {
        alert(SuccessMessage);
        router.push(SuccessRouting);
      })
      .catch((error) => {
        alert(ErrorMessage);
      });
  };

  return { login, signin };
}
