import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import TodoListPresenter from "./list.presenter";

export default function TodoListContainer() {
  const [List, setList] = useState<string[]>([]);
  const [isNew, setIsNew] = useState<Boolean>(false);

  const onClickDeleteTodo = (event: MouseEvent<HTMLButtonElement>) => {
    axios
      .delete(`http://localhost:8080/todos/${event.currentTarget.id}`, {
        headers: {
          Authorization: localStorage.getItem("Token"),
        },
      })
      .then((response) => {
        ListUp();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickCallEditer = () => {
    setIsNew((prev) => !prev);
  };

  const ListUp = async () => {
    const Token = localStorage.getItem("Token");
    await axios
      .get("http://localhost:8080/todos/", {
        headers: {
          Authorization: Token,
        },
      })
      .then((response) => {
        setList(response.data.data.reverse());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    ListUp();
  }, []);
  return <TodoListPresenter ListUp={ListUp} onClickDeleteTodo={onClickDeleteTodo} List={List} onClickCallEditer={onClickCallEditer} isNew={isNew} setIsNew={setIsNew} setList={setList} />;
}
