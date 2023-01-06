import TodoContainer from "../../new/new.container";
import * as S from "./listItem.styles";

export default function ListItemPresenter(props: any) {
  return (
    <S.Wrapper>
      {props.isEdit ? (
        <TodoContainer value={props.value} ListUp={props.ListUp} setIsEdit={props.setIsEdit} ItemId={props.el.id} isEdit={props.isEdit} onClickShowUpdateInput={props.onClickShowUpdateInput} />
      ) : (
        <S.ListItem>
          <S.TextBox>
            <S.Title>제목 :{props.el.title}</S.Title>
            <S.Content>내용 :{props.el.content}</S.Content>
          </S.TextBox>
          <S.BtnBox>
            <S.Btns id={props.el.id} onClick={props.onClickDeleteTodo}>
              삭제
            </S.Btns>
            <S.Btns onClick={props.onClickShowUpdateInput}>수정</S.Btns>
          </S.BtnBox>
        </S.ListItem>
      )}
    </S.Wrapper>
  );
}
