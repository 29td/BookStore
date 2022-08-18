import Book from './Book';
import FormAdd from './Form';

const Books = () => {
  const books = [
    { id: 'b1', title: 'The book of Eli', author: 'Eli' },
    { id: 'b2', title: 'Jane Eyre', author: 'Charlotte' },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <FormAdd />
    </>
  );
};

export default Books;
