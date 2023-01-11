import TodoContainer from "../new/new.container";
import * as S from "./list.styles";
import { IPropsListComponent } from "./list.types";
import ListItemContainer from "./listItem/listItem.container";
export default function TodoListPresenter(props: IPropsListComponent) {
  return (
    <S.Wrapper>
      <S.BtnWrapper>
        <S.CreateBtn onClick={props.onClickCallEditer}>{props.isNew ? "취소하기" : "추가하기"}</S.CreateBtn>
        {props.isNew ? <TodoContainer setIsNew={props.setIsNew} ListUp={props.ListUp} /> : <div></div>}
      </S.BtnWrapper>
      <div>
        {props.List?.map((el: any, index: number) => (
          <ListItemContainer onClickDeleteTodo={props.onClickDeleteTodo} ListUp={props.ListUp} el={el} index={index} key={index} />
        ))}
      </div>
    </S.Wrapper>
  );
}
