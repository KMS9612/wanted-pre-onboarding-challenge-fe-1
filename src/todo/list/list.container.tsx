import axios from "axios";
import { useEffect, useState } from "react";
import TodoListPresenter from "./list.presenter";

export default function TodoListContainer() {
  const [List, setList] = useState<string[]>([]);
  const onClickCreateInput = () => {};

  useEffect(() => {
    const ListUp = async () => {
      const Token = localStorage.getItem("Token");
      await axios
        .get("http://localhost:8080/todos/", {
          headers: {
            Authorization: Token,
          },
        })
        .then((response) => {
          setList(response.data.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    ListUp();
  }, []);

  List.map((el) => {
    console.log(el);
  });
  return <TodoListPresenter List={List} />;
}
