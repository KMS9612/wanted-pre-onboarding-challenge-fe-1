import { FieldErrorsImpl, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

export interface IPropsLogin {
  onSubmitInfo: (data: IDataLoginForm) => SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

export interface IDataLoginForm {
  id: string;
  pw: string;
}
