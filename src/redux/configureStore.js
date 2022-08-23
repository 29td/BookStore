import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = configureStore({
  books: bookReducer,
  categories: categoriesReducer,
});

rootReducer();
