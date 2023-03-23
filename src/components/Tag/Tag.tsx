import React, { FC } from 'react';
import { ITag } from './Tag.type';
import './Tag.scss'

export const Tag: FC<ITag> = ( { title } ) => {
  return (
    <>
      <div className='tag'>
        { title }
      </div>
    </>
  );
};
