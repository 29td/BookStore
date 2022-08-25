import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/l5uMLsaRXl0PoGJPW2Vl/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const books = [];

export const addBook = (data) => ({
  type: ADD_BOOK,
  data,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case `${FETCH_BOOK}/fulfilled`:
      return action.payload;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

const transformToBooks = (inputObj) => {
  const transformed = Object.keys(inputObj).map((obj) => ({
    item_id: obj,
    title: inputObj[obj][0].title,
    author: inputObj[obj][0].author,
    category: inputObj[obj][0].category,
  }));

  return transformed;
};

export const getBooks = createAsyncThunk(FETCH_BOOK, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const transformed = transformToBooks(data);

  return transformed;
});

export const postBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return book;
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    body: { item_id: id },
  });
  return id;
});

export default bookReducer;
