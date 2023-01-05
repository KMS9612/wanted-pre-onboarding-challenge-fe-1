import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import TodoPresenter from "./new.presenter";

export default function TodoContainer(props: any) {
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
      .then(async (response) => {
        console.log(response);
        alert("등록이 완료되었습니다!");
        props.setIsNew(false);
        await axios
          .get(`http://localhost:8080/todos/`, {
            headers: {
              Authorization: Token,
            },
          })
          .then((response) => {
            props.setList(response.data.data.reverse());
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <TodoPresenter register={register} handleSubmit={handleSubmit} onClickSubmit={onClickSubmit} />;
}
