import * as S from "./new.styles";

export default function TodoPresenter(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.isEdit ? props.onClickUpdateTodo : props.onClickSubmit)}>
      <S.InputWrapper>
        <S.Title defaultValue={props.isEdit ? props.value.data?.title : ""} type={"text"} placeholder={"제목을 입력해주세요"} onChange={props.onChangeInput} {...props.register("title")}></S.Title>
        <S.Content
          defaultValue={props.isEdit ? props.value.data?.content : ""}
          type={"text"}
          placeholder={"내용을 입력해주세요"}
          onChange={props.onChangeInput}
          {...props.register("content")}
        ></S.Content>
        <S.SubmitBtn type="submit">등록하기</S.SubmitBtn>
      </S.InputWrapper>
      {props.isEdit ? <button onClick={props.onClickShowUpdateInput}>수정취소 </button> : null}
    </S.Wrapper>
  );
}
