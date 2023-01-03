import * as S from "./signin.styles";

export default function SignInPresenter(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onSubmitInfo)}>
      <S.Heading>SignIn</S.Heading>
      <S.InputWrapper>
        <input type="text" {...props.register("id")} />
        <p>{props.errors.id?.message}</p>
      </S.InputWrapper>
      <S.InputWrapper>
        <input type="password" {...props.register("pw")} />
        <p>{props.errors.pw?.message}</p>
      </S.InputWrapper>
      <S.BtnWrapper>
        <button type="submit" onClick={props.onSubmitInfo}>
          회원가입하기
        </button>
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
