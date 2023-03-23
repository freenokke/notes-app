import { UseFormSetValue } from 'react-hook-form';
import { INoteData } from '../Note/Note.type';

export interface IProps {
  setFieldValue: UseFormSetValue<INoteData>;
  detectHashTagFunc: (content: string) => void;
  label:  string;
  defaultValue: string;
}
