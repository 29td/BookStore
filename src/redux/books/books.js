import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [
  { id: uuidv4(), title: 'The book of Eli', author: 'Eli' },
  { id: uuidv4(), title: 'Jane Eyre', author: 'Charlotte' },
];

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
    case ADD_BOOK:
      return [...state, action.data];

    case REMOVE_BOOK:
      return state.filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
