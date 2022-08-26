import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormAdd from './Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books) || [];

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <h1>Book Lists</h1>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <FormAdd />
    </>
  );
};

export default Books;
