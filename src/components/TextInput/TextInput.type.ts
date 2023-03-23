import { UseFormRegister } from 'react-hook-form';
import { INoteData } from '../Note/Note.type';

export type InputsArray = 'title' | 'content' | 'tags';

export interface ITextInput {
  name: InputsArray
  label: string;
  register?: UseFormRegister<INoteData>;
}
