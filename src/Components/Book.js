import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = (prop) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = prop;

  const removeBookHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <p>{category}</p>
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
  category: PropTypes.string.isRequired,
};

export default Book;
