import { FieldErrorsImpl, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IPropsLogin {
  onSubmitInfo: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}
