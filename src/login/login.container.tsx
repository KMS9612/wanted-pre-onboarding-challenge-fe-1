import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginPresenter from "./login.presenter";
export default function LoginContainer() {
  const schema = yup.object({
    id: yup
      .string()
      .matches(/^\w+@\w+\.\w+$/, "이메일 형식이 맞지않습니다")
      .required("이메일은 필수 입력입니다."),
    pw: yup.string().min(8, "비밀번호는 8자리 이상 입니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitInfo = async () => {
    axios
      .post("http://localhost:8080/users/login", {
        email: "김민승@naver.com",
        password: "1234",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return <LoginPresenter onSubmitInfo={onSubmitInfo} />;
}
