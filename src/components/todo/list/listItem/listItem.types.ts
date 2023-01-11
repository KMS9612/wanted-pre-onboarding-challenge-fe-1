import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IPropsListItemPresenter {
  value: Object;
  onClickDeleteTodo: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  ListUp: () => void;
  setIsEdit: Dispatch<SetStateAction<Boolean>>;
  isEdit: Boolean;
  onClickShowUpdateInput: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  el: any;
  index: number;
  setIsNew: Dispatch<SetStateAction<Boolean>>;
}
export interface IPropsListItemContainer {
  onClickDeleteTodo: (event: MouseEvent<HTMLButtonElement>) => void;
  ListUp: () => void;
  el: any;
  index: number;
  key: number;
}
