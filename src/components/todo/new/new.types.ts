import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IPropsNewContainer {
  value: Object;
  ListUp: () => void;
  setIsNew: Dispatch<SetStateAction<Boolean>>;
  setIsEdit: Dispatch<SetStateAction<Boolean>>;
  ItemId: any;
  isEdit: Boolean;
  onClickShowUpdateInput: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
}
export interface IPropsNewPresenter {}
export interface IDataCreateNewTodos {
  title: string;
  content: string;
}
