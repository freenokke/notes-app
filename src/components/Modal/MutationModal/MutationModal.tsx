import React, { FC, useCallback, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IMutationModal } from './MutationModal.type';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import './MutationModal.scss';
import { ContentEditableField } from '../../ContentEditableField/ContentEditableField';
import { TextInput } from '../../TextInput/TextInput';
import './MutationModal.scss'
import { Tag } from '../../Tag/Tag';
import { INoteData } from '../../Note/Note.type';

export const MutationModal: FC<IMutationModal> = ( { setVisibility, data, callback, visibility } ) => {
  const [ tags, setTags ] = useState<string[] | null>(data?.tags || null);
  const contentField = useRef<HTMLDivElement | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    setValue
  } = useForm<INoteData>({
    defaultValues: { title: `${ data ? data.title : '' }`, content: `${ data ? data.content : '' }` },
  });
  const onSubmit = async ( formData: INoteData ) => {
    formData.tags = tags ?? [];
    formData.id = data?.id ?? '';
    await callback(formData);
    reset();
    setTags(null);
    setVisibility(false);
  };

  const detectHashTags = useCallback((content: string) => {
    const regexp = /#[a-z0-9_]+/g;
    const tagsArray = content.match(regexp);
    if ( tagsArray ) {
      setTags(tagsArray.map(( item ) => item.slice(1).trim()));
    } else {
      setTags(null)
    }
  }, []);

  if ( !visibility ) {
    return null;
  }

  return (
    <ModalWrapper setVisibility={ setVisibility }>
      <form className='mutation-form' onSubmit={ handleSubmit(onSubmit) }>
        <TextInput name='title' label='title' register={register} />
        <ContentEditableField
          defaultValue={data?.content ?? ''}
          label='content'
          ref={contentField}
          setFieldValue={setValue}
          detectHashTagFunc={detectHashTags}
        />
        <div className='mutation-form__tags' >
          { tags?.map(( tag, index ) => <Tag title={ tag } key={ index } />) }
        </div>
        <button className='mutation-form__btn' type='submit'>Submit</button>
      </form>
    </ModalWrapper>
  );
};
