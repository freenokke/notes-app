import { Dispatch, SetStateAction } from "react";
import { INoteData } from '../../Note/Note.type';

export interface IExposeModal {
  data: INoteData;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  visibility: boolean;
}
