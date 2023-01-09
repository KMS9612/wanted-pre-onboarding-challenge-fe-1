import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginPresenter from "./login.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
export default function LoginContainer() {
  const router = useRouter();

  const schema = yup.object({
    id: yup
      .string()
      .matches(/^\w+@\w+\.\w+$/, "이메일 형식이 맞지않습니다")
      .required("아이디를 입력해주세요"),
    pw: yup
      .string()
      .min(8, "비밀번호는 8자리 이상 입니다.")
      .required("비밀번호를 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitInfo = async (data: any) => {
    await axios
      .post("http://localhost:8080/users/login", {
        email: data.id,
        password: data.pw,
      })
      .then((response) => {
        alert("로그인 되었습니다!");
        const TOKEN = response.data.token;
        localStorage.setItem("Token", TOKEN);
        router.push("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <LoginPresenter
      onSubmitInfo={onSubmitInfo}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
}
