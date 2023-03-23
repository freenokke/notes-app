import React from 'react';

export interface ISearchInput {
  inputValue: string;
  setInputValue:  React.Dispatch<React.SetStateAction<string>>
}
