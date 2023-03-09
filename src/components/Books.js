import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <Book
          key={uuidv4()}
          title={book.title}
          author={book.author}
          item_id={book.item_id}
        />
      ))}
      <Form />
    </>
  );
};

export default Books;
