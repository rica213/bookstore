import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
