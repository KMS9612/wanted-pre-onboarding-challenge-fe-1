import axios from "axios";

/** 로그인api에 접근하는 함수 (email,password) */
const login = (email: string, password: string, SuccessMessage: string, ErrorMessage: string) => {
  axios
    .post(`http://localhost:8080/users/login`, {
      email,
      password,
    })
    .then((response) => {
      alert(SuccessMessage);
      const TOKEN = response.data.token;
      localStorage.setItem("Token", TOKEN);
    })
    .catch((error) => {
      alert(ErrorMessage);
    });
};

const signin = (email, password) => {};

export { login };
