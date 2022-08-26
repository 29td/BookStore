import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = (prop) => {
  const dispatch = useDispatch();
  const {
    id, title, author, categories,
  } = prop;

  const removeBookHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <p>{categories}</p>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={removeBookHandler}>
        Delete
      </button>
      {' '}

    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
