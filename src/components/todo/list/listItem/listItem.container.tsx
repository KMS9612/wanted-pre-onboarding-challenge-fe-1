import axios from "axios";
import { MouseEvent, useState } from "react";
import ListItemPresenter from "./listItem.presenter";
import { IPropsListItemContainer } from "./listItem.types";

export default function ListItemContainer(props: IPropsListItemContainer) {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [value, setValue] = useState<Object>({});

  const onClickShowUpdateInput = async (event: MouseEvent<HTMLButtonElement>) => {
    const Token = localStorage.getItem("Token");
    setIsEdit((prev) => !prev);
    await axios
      .get(`http://localhost:8080/todos/${props.el.id}`, {
        headers: {
          Authorization: Token,
        },
      })
      .then((response) => {
        setValue(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <ListItemPresenter
      value={value}
      onClickDeleteTodo={props.onClickDeleteTodo}
      ListUp={props.ListUp}
      setIsEdit={setIsEdit}
      isEdit={isEdit}
      onClickShowUpdateInput={onClickShowUpdateInput}
      el={props.el}
      index={props.index}
    />
  );
}
