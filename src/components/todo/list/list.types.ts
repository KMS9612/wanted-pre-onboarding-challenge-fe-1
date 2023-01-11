import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IPropsListComponent {
  ListUp: () => void;
  onClickDeleteTodo: (event: MouseEvent<HTMLButtonElement>) => void;
  List: string[];
  onClickCallEditer: () => void;
  isNew: Boolean;
  setIsNew: Dispatch<SetStateAction<Boolean>>;
  setList: Dispatch<SetStateAction<string[]>>;
}
