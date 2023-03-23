import { Note, Loader, SearchInput } from './components';
import { MdNoteAdd } from 'react-icons/md';
import React, { useCallback, useEffect, useState } from 'react';
import { MutationModal } from './components';
import { INoteData } from './components/Note/Note.type';
import './App.scss'
import { useFetch } from './hooks/useFetch';
import regexpFilter from './core/utils/filterNotes';

export function App() {
  const [ notes, setNotes ] = useState<INoteData[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<boolean>(false);
  const [ isMutationModalVisible, setMutationModalVisibility ] = useState(false);
  const [ searchInputValue, setSearchInputValue ] = useState<string>('')

  const {
    fetchNotes,
    createNote,
    deleteNote,
    updateNote
  } = useFetch(setLoading, setError, setNotes)


  useEffect(() => {
    fetchNotes();
  }, [ fetchNotes ]);

  const onCreateIconClick = useCallback(() => {
    setMutationModalVisibility(true);
  }, []);

  return (
    <>
      <header className='header'>
        <h1>Your Notes</h1>
        <SearchInput
          inputValue={searchInputValue}
          setInputValue={setSearchInputValue}
          />
        <MdNoteAdd onClick={ onCreateIconClick } size='32px' style={ { cursor: 'pointer' } } />
      </header>
      <main className='main'>
        { loading && <Loader /> }
        { !error ? (
          <div className='notes-container'>
            { notes
              ? regexpFilter(notes, searchInputValue).map(( note: INoteData ) => (
                <Note data={ note } deleteNote={ deleteNote } updateNote={ updateNote } key={ note.id } />
              ))
              : [] }
          </div>
        ) : <h2>Something went wrong!!</h2> }
      </main>
      <MutationModal
        setVisibility={ setMutationModalVisibility }
        callback={ createNote }
        visibility={ isMutationModalVisible }
      />
    </>
  );
}
