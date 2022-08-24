import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const FormAdd = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({ title: '', author: '' });

  const valueChangeHandler = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    if (!formValues.title.trim() || !formValues.author.trim()) return;
    const book = {
      item_id: uuidv4(),
      title: formValues.title,
      author: formValues.author,
      category: 'Fiction',
    };
    dispatch(postBook(book));

    setFormValues({ title: '', author: '' });
  };

  return (
    <div className="form-container">
      <p className="form-container__title">Add new book</p>
      <form onSubmit={addBookHandler} className="form">
        <input
          className="form__control"
          value={formValues.title}
          onChange={valueChangeHandler}
          type="text"
          placeholder="Title"
          name="title"
        />
        <input
          className="form__control"
          value={formValues.author}
          onChange={valueChangeHandler}
          type="text"
          placeholder="Author"
          name="author"
        />
        <button className="form__control form__control--btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
