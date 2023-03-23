import { Dispatch, SetStateAction, useCallback } from 'react';
import { request } from '../core/utils/request';
import { INoteData } from '../components/Note/Note.type';
import { BASE_URL, PATHS } from '../core/consts/url';

export function useFetch(
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<boolean>>,
  setShownNotes: Dispatch<SetStateAction<INoteData[]>>
  ) {
  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true);
      const notes = await request<INoteData[]>(`${ BASE_URL }/${ PATHS.NOTES }`);
      setShownNotes(notes);
    } catch {
      setError(true);
    }
    setLoading(false);
  }, [ setError, setLoading, setShownNotes ]);

  const createNote = useCallback(async ( note: INoteData ) => {
    try {
      setLoading(true);
      await request(`${ BASE_URL }/${ PATHS.NOTES }`, 'POST', JSON.stringify(note), {
        accept: 'application/json',
        'Content-Type': 'application/json',
      });
      await fetchNotes();
    } catch {
      setError(true);
    }
    setLoading(false);
  }, [ setError, setLoading, fetchNotes ]);

  const deleteNote = useCallback(async ( id: string ) => {
    try {
      setLoading(true);
      await request(`${ BASE_URL }/${ PATHS.NOTES }/${ id }`, 'DELETE');
      await fetchNotes();
    } catch {
      setError(true);
    }
    setLoading(false);
  }, [ setError, setLoading, fetchNotes ]);

  const updateNote = useCallback(async ( note: INoteData ) => {
    try {
      setLoading(true);
      await request(`${ BASE_URL }/${ PATHS.NOTES }/${ note.id }`, 'PUT', JSON.stringify(note), {
        accept: 'application/json',
        'Content-Type': 'application/json',
      });
      await fetchNotes();
    } catch {
      setError(true);
    }
    setLoading(false);
  }, [ setError, setLoading, fetchNotes ]);

  return {
    fetchNotes,
    createNote,
    deleteNote,
    updateNote
  }
}
