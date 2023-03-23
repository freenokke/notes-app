import { INoteData } from '../../components/Note/Note.type';

export default function regexpFilter( notes: INoteData[], string: string ) {
  const separatedTags = string.split(' ');
  const matchedNotes = notes.filter((note) => {
    return [ ...note.tags ].filter(( tag ) => separatedTags.indexOf(tag) !== -1).length > 0
  });
  if (matchedNotes.length > 0) {
    return matchedNotes
  }
  return notes
}
