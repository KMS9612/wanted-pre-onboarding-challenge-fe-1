import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginPresenter from "./login.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { IDataLoginForm } from "./login.types";
import useAuth from "../../common/hooks/useAuth";
import { useEffect } from "react";
export default function LoginContainer() {
  const { login } = useAuth();
  const router = useRouter();

  const schema = yup.object({
    id: yup
      .string()
      .matches(/^\w+@\w+\.\w+$/, "이메일 형식이 맞지않습니다")
      .required("아이디를 입력해주세요"),
    pw: yup.string().min(8, "비밀번호는 8자리 이상 입니다.").required("비밀번호를 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitInfo = async (data: IDataLoginForm) => {
    const SuccessMessage = "로그인성공";
    const ErrorMessage = "로그인실패 다시 시도해주세요";
    const SuccessRouting = "/";

    login(data.id, data.pw, SuccessMessage, SuccessRouting, ErrorMessage);
  };

  return <LoginPresenter onSubmitInfo={onSubmitInfo} register={register} handleSubmit={handleSubmit} errors={errors} />;
}
