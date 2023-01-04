import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import TodoPresenter from "./new.presenter";

export default function TodoContainer() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data: any) => {
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
      .then((response) => {
        console.log(response);
        alert("등록이 완료되었습니다!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <TodoPresenter register={register} handleSubmit={handleSubmit} onClickSubmit={onClickSubmit} />;
}
