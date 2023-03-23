import { Dispatch, SetStateAction } from "react";

export interface IModalWrapper {
  setVisibility: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element | null;
}