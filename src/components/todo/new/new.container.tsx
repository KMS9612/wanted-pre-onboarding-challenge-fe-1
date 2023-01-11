import axios from "axios";
import { useForm } from "react-hook-form";
import TodoPresenter from "./new.presenter";
import { IDataCreateNewTodos, IPropsNewContainer } from "./new.types";

export default function TodoContainer(props: IPropsNewContainer) {
  const { register, handleSubmit } = useForm();
  // 새로 등록 함수
  const onClickSubmit = async (data: IDataCreateNewTodos) => {
    const Token = localStorage.getItem("Token");
    await axios
      .post(
        `http://localhost:8080/todos/`,
        {
          title: data.title,
          content: data.content,
        },
        {
          headers: {
            Authorization: Token,
          },
        }
      )
      .then(async (response) => {
        console.log(response);
        alert("등록이 완료되었습니다!");
        props.setIsNew(false);
        props.ListUp();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onClickUpdateTodo = async (data: any) => {
    const Token = localStorage.getItem("Token");

    await axios
      .put(
        `http://localhost:8080/todos/${props.ItemId}`,
        {
          title: data.title,
          content: data.content,
        },
        {
          headers: {
            Authorization: Token,
          },
        }
      )
      .then(async (response) => {
        console.log(response);
        alert("수정이 완료되었습니다.");
        props.setIsEdit(false);
        props.ListUp();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <TodoPresenter
      value={props.value}
      onClickUpdateTodo={onClickUpdateTodo}
      isEdit={props.isEdit}
      onClickShowUpdateInput={props.onClickShowUpdateInput}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}
