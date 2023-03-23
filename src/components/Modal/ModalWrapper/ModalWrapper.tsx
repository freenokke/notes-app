import { FC, useCallback } from 'react';
import { IModalWrapper } from './ModalWrapper.type';
import { MdClose } from 'react-icons/md';
import { Body, Overlay } from './ModalWrapper.style';

export const ModalWrapper: FC<IModalWrapper> = ( { setVisibility, children } ) => {
  const onCloseModal = useCallback(() => {
    setVisibility(false);
  }, [ setVisibility ]);

  return (
    <>
      <Overlay onClick={ onCloseModal } />
      <Body>
        <MdClose
          onClick={ onCloseModal }
          color='red'
          size='32px'
          style={ {
            cursor: 'pointer',
            position: 'absolute',
            top: 10,
            right: 10,
          } }
        />
        { children }
      </Body>
    </>
  );
};
