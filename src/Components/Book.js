import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Delete</button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
