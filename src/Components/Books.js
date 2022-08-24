import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormAdd from './Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
      <FormAdd />
    </>
  );
};

export default Books;
