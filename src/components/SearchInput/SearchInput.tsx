import { ISearchInput } from './SearchInput.type';
import React, { FC, useCallback } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import './SearchInput.scss'

// eslint-disable-next-line react/display-name
export const SearchInput: FC<ISearchInput> = (
  {
    inputValue,
    setInputValue
  }) => {
  const inputChangeHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value)
    },[ setInputValue ]);

  const resetSearchInput = useCallback(() => {
    setInputValue('')
  }, [ setInputValue ]);

  return (
    <div className='search-input'>
      <div className='search-input__icons icons-block'>
        <span className='icons-block__container icons-container'>
          { inputValue ? (
            <MdClose  onClick={ resetSearchInput } className='icons-container__icon icons-container__icon_close' />
          ) : (
            <MdSearch className='icons-container__icon icons-container__icon_search' />
          ) }
        </span>
      </div>
      <input
        className='search-input__input'
        type='text'
        placeholder='type the tag...'
        autoComplete='off'
        autoFocus
        onChange={ inputChangeHandle }
        value={ inputValue }
      ></input>
    </div>
  )};
