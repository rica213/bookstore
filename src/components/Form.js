/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddNewBook = (e) => {
    e.preventDefault();

    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: '',
    };

    dispatch(addBook(book));
    dispatch(postBook(book));
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
