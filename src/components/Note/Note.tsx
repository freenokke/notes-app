import { MdDelete, MdModeEdit } from 'react-icons/md';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { INote } from './Note.type';
import './Note.scss';
import { ExposeModal, MutationModal, Tag } from '../../components';

export const Note: FC<INote> = ( { data, updateNote, deleteNote } ) => {
  const [ isMutationModalVisible, setMutationModalVisibility ] = useState(false);
  const [ isExposeModalVisible, setExposeModalVisibility ] = useState(false);

  const { title, content, id, tags } = data;

  const onBtnDeleteClick = useCallback(
    async ( e: React.MouseEvent ) => {
      e.stopPropagation();
      await deleteNote(id);
    },
    [ deleteNote, id ],
  );

  const onBtnUpdateClick = useCallback(( e: React.MouseEvent ) => {
    e.stopPropagation();
    setMutationModalVisibility(true);
  }, []);

  const onNoteCLick = useCallback(() => {
    setExposeModalVisibility(true);
  }, []);

  const contentPreview = useMemo(() => {
    let sliced = content.slice(0, 50);
    if ( sliced.length < content.length ) {
      sliced += '...';
    }
    return sliced;
  }, [ content ]);

  return (
    <>
      <div className='note'>
        <div className='note__header header-note'>
          <h3 className='header-note__title' onClick={ onNoteCLick }>{ title }</h3>
          <div className='header-note__icons'>
            <MdDelete onClick={ onBtnDeleteClick } size='26px' color='#d82d2d' />
            <MdModeEdit onClick={ onBtnUpdateClick } size='26px' color='#5353b4' />
          </div>
        </div>
        <div className='note__content' onClick={ onNoteCLick }>{ contentPreview }</div>
        <div className='note__tags'>
          { tags.map(( tag, index ) => <Tag title={ tag } key={ index } />) }
        </div>
      </div>
      { isMutationModalVisible && (
        <MutationModal
          data={ data }
          callback={ updateNote }
          setVisibility={ setMutationModalVisibility }
          visibility={ isMutationModalVisible }
        />
      ) }
      { isExposeModalVisible && (
        <ExposeModal
          data={ data }
          setVisibility={ setExposeModalVisibility }
          visibility={ isExposeModalVisible }
        />
      ) }
    </>
  );
};
