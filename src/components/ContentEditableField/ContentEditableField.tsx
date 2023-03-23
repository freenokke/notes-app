import React, { FormEvent, forwardRef, useCallback, useState } from 'react';
import { IProps } from './ContentEditableField.type';
import './ContentEditableField.scss';

// eslint-disable-next-line react/display-name
export const ContentEditableField = forwardRef<HTMLDivElement, IProps>(( props, ref ) => {
  const { setFieldValue, detectHashTagFunc, label, defaultValue } = props;
  const [ contentValue, setContentValue ] = useState<string>('');

  const converter = ( str: string ) => {
    let strCopy = str;
    strCopy = strCopy.replace(/(<)/gi, '&lt;');
    strCopy = strCopy.replace(/(<)/gi, '&lg;');
    strCopy = strCopy.replace(/(?:\r\n|\n\r|\r|\n)/g, '<br />');
    strCopy = strCopy.replace(/#(.+?)(?=[\s.,:,]|$)/g, '<span>#$1</span>');
    strCopy = strCopy.replace(/@(.+?)(?=[\s.,:,]|$)/g, '<span>@$1</span>');
    strCopy = strCopy.replace(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g, '<span>$1</span>');
    return strCopy;
  }

  const onChangeHandler = useCallback(( e: FormEvent<HTMLDivElement> ) => {
    const content = (e.target as HTMLDivElement).textContent ?? '';
    setFieldValue('content', content)
    const updated = converter(content);
    setContentValue(updated);
    detectHashTagFunc(content)
  }, [ setFieldValue, detectHashTagFunc ]);

  return (
    <div className='editor'>
      <div className='editor__label'>{label}</div>
      <div className='editor__output' dangerouslySetInnerHTML={ { __html: contentValue } } ref={ ref }></div>
      <div
        className='editor__input'
        contentEditable={ true }
        suppressContentEditableWarning={ true }
        onInput={ onChangeHandler }
        onFocus={onChangeHandler}
      >
        { defaultValue }
      </div>
    </div>
  );
});
