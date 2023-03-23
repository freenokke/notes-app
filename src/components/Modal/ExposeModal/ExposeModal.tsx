import React, { FC, useCallback } from 'react';
import { IExposeModal } from './ExposeModal.type';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import './ExposeModal.scss'
import { Tag } from '../../Tag/Tag';

export const ExposeModal: FC<IExposeModal> = ( { data, setVisibility, visibility } ) => {
  const { content, title, tags } = data;

  const onCloseModal = useCallback(() => {
    setVisibility(false);
  }, [ setVisibility ]);

  if ( !visibility ) {
    return null;
  }

  return (
    <ModalWrapper setVisibility={ onCloseModal }>
      <div className='expose-modal'>
        <h3 className='expose-modal__title'>{ title }</h3>
        <p className='expose-modal__content'>{ content }</p>
        <div className='mutation-form__tags' >
          { tags?.map(( tag, index ) => <Tag title={ tag } key={ index } />) }
        </div>
      </div>
    </ModalWrapper>
  );
};
