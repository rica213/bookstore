import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLIMYJZbEya3xN7run3p/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const res = await axios(baseUrl);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (book, thunkAPI) => {
    try {
      const res = await axios.post(baseUrl, book);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const deleteBookFromApi = createAsyncThunk(
  'books/deleteBookFromApi',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${baseUrl}/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));

    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const resObject = action.payload;
        const newBooksArr = [];

        Object.keys(resObject).forEach((id) => {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
        });

        newState.books = newBooksArr;
        return newState;
      })
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
