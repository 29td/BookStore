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

  const fillValue = Math.trunc(Math.random() * 100);

  const circleStyle = {
    strokeDasharray: '186px',
    strokeDashoffset: `calc(186px - (186px * ${fillValue}) / 100)`,
    stroke: '#0290ff',
    transition: 'stroke-dashoffset 0.5s ease 0s, stroke 0.5s ease',
  };

  return (
    <div className="book">
      <div>
        <p className="book__category">{category}</p>
        <p className="book__title">{title}</p>
        <p className="book__author">{author}</p>
        <ul className="book__btn-list">
          <li className="book__btn">Comments</li>
          <li className="book__separator">&nbsp;</li>
          <li className="book__btn">
            <button
              type="button"
              className="book__btn book__btn--remove"
              onClick={removeBookHandler}
            >
              Delete
            </button>
          </li>
          <li className="book__separator">&nbsp;</li>
          <li className="book__btn">Edit</li>
        </ul>
      </div>
      <div className="book__circle">
        <div className="book__circle--left">
          <svg className="book__svg">
            <circle className="book__svg--circle" cx="35" cy="35" r="30" />
            <circle style={circleStyle} className="book__svg--circle" cx="35" cy="35" r="30" />
          </svg>
        </div>
        <div className="book__circle--right">
          <p className="book__percent">{`${fillValue}%`}</p>
          <p className="book__completed">Completed</p>
        </div>
      </div>
      <div>
        <p className="book__chapter--current">Current Chapter</p>
        <p className="book__chapter--number">Chapter 17</p>
        <button type="button" className="book__btn--update">
          Update Progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
