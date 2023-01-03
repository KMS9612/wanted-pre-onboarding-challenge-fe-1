import * as S from "./login.styles";

export default function LoginPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Heading>login</S.Heading>
      <S.InputWrapper>
        Id:
        <input type="text" />
        PW: <input type="password" />
      </S.InputWrapper>
      <S.BtnWrapper>
        <button onClick={props.onSubmitInfo}>로그인</button>
        <button>회원가입</button>
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
