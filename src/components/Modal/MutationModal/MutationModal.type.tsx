import { Dispatch, SetStateAction } from "react";
import { INoteData } from '../../Note/Note.type';

export interface IMutationModal {
  setVisibility: Dispatch<SetStateAction<boolean>>;
  callback: (payload: INoteData) => Promise<void>
  visibility: boolean;
  data?: INoteData;
}

