import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        title: action.payload.title,
        author: action.payload.author
      }
      state.books.push(newBook);
    },
  }
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;