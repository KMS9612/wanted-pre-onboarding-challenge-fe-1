import axios from "axios";
import { useState } from "react";
import ListItemPresenter from "./listItem.presenter";

export default function ListItemContainer(props: any) {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [value, setValue] = useState<Object>({});

  const onClickShowUpdateInput = async (event: any) => {
    const Token = localStorage.getItem("Token");
    setIsEdit((prev) => !prev);
    await axios
      .get(`http://localhost:8080/todos/${props.el.id}`, {
        headers: {
          Authorization: Token,
        },
      })
      .then((response) => {
        console.log(response.data);
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
