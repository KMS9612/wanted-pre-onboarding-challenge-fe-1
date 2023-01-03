import SignInPresenter from "./signin.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
export default function SignInContainer() {
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

  const onSubmitInfo = async (data: any) => {
    await axios
      .post("http://localhost:8080/users/create", {
        email: data.id,
        password: data.pw,
      })
      .then((response) => {
        const TOKEN = response.data.token;
        console.log(response, response.data.token);
        localStorage.setItem("Token", TOKEN);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return <SignInPresenter register={register} handleSubmit={handleSubmit} onSubmitInfo={onSubmitInfo} errors={errors} />;
}
