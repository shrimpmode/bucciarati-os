import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Note = {
  id: number;
  title: string;
  content: string;
  created: Date | number;
  updated: Date | number;
};

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [
    {
      id: 1,
      title: "Note 1",
      content: "This is a note",
      created: new Date().getTime(),
      updated: new Date().getTime(),
    },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
  },
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
