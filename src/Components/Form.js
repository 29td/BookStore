import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

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
    const book = { id: uuidv4(), title: formValues.title, author: formValues.author };
    dispatch(addBook(book));

    setFormValues({ title: '', author: '' });
  };

  return (
    <form onSubmit={addBookHandler}>
      <input
        value={formValues.title}
        onChange={valueChangeHandler}
        type="text"
        placeholder="Title"
        name="title"
      />
      <input
        value={formValues.author}
        onChange={valueChangeHandler}
        type="text"
        placeholder="Author"
        name="author"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default FormAdd;
