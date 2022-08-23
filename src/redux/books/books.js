const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [];

export const addBook = (id, title) => ({
  type: ADD_BOOK,
  book: {
    id,
    name: title,
  },
});

export const removeBook = (ID) => ({
  type: REMOVE_BOOK,
  id: ID,
});

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state, action.book],
      };
    case REMOVE_BOOK:
      return {
        ...state, books: books.filter((e) => e.id !== action.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
