import * as S from "./login.styles";
import { IPropsLogin } from "./login.types";

export default function LoginPresenter(props: IPropsLogin) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onSubmitInfo)}>
      <S.Heading>login</S.Heading>
      <S.InputWrapper>
        <input type="text" {...props.register("id")} placeholder={"아이디를 입력하세요"} />
      </S.InputWrapper>
      <S.InputWrapper>
        <input type="password" {...props.register("pw")} placeholder={"비밀번호를 입력하세요"} />
      </S.InputWrapper>
      <S.BtnWrapper>
        <button type="submit" onClick={props.onSubmitInfo}>
          로그인
        </button>
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
