import SignInPresenter from "./signin.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { IDataSigninForm } from "./signin.types";
import useAuth from "../../common/hooks/useAuth";
export default function SignInContainer() {
  const router = useRouter();
  const { signin } = useAuth();
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

  const onSubmitInfo = (data: IDataSigninForm) => {
    const SuccessMessage = "회원가입에 성공했습니다.";
    const ErrorMessage = "회원가입에 실패했습니다 다시 시도해 주세요.";
    const SuccessRouting = "/";
    signin(data.id, data.pw, SuccessMessage, SuccessRouting, ErrorMessage);
  };

  return <SignInPresenter register={register} handleSubmit={handleSubmit} onSubmitInfo={onSubmitInfo} errors={errors} />;
}
