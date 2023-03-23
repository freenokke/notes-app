export interface INote {
  data: INoteData;
  deleteNote: ( id: string ) => Promise<void>
  updateNote: (note: INoteData) => Promise<void>
}

export interface INoteData {
  id: string;
  title: string;
  content: string;
  tags: string[];
}
