import TodoContainer from "../new/new.container";
import * as S from "./list.styles";
export default function TodoListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.BtnWrapper>
        <S.CreateBtn onClick={props.onClickCallEditer}>{props.isNew ? "취소하기" : "추가하기"}</S.CreateBtn>
        {props.isNew ? <TodoContainer setIsNew={props.setIsNew} setList={props.setList} /> : <div></div>}
      </S.BtnWrapper>
      <div>
        {props.List?.map((el: any, index: any) => (
          <S.ListItem key={index}>
            <S.TextBox>
              <S.Title>제목 :{el.title}</S.Title>
              <S.Content>내용 :{el.content}</S.Content>
            </S.TextBox>
            <S.BtnBox>
              <S.Btns id={el.id} onClick={props.onClickDeleteTodo}>
                삭제
              </S.Btns>
              <S.Btns>수정</S.Btns>
            </S.BtnBox>
          </S.ListItem>
        ))}
      </div>
    </S.Wrapper>
  );
}
