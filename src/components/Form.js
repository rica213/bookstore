/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleAddNewBook = (e) => {
    e.preventDefault();
    const item_id = `item${books.length + 1}`;
    dispatch(addBook({ item_id, title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <form>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
        required
      />
      <input
        type="text"
        placeholder="author"
        onChange={(e) => setAuthor(e.target.value)}
        className="author-input"
        required
      />
      <button
        type="button"
        onClick={handleAddNewBook}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
