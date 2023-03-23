import React, { FC } from 'react';
import { ITextInput } from './TextInput.type';
import './TextInput.scss'

export const TextInput: FC<ITextInput> = ( { label, register, name } ) => {
  return (
    <div className="text-input">
      <label className="text-input__label label">
        <input
          {...register ? { ...register(name) } : {}}
          className="label__input"
          autoComplete="off"
        />
      <div className="text-input__name">
        {label}
      </div>
      </label>
    </div>
  );
};
