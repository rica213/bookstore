/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/booksSlice';
import styles from '../styles/Form.module.css';

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
    <>
      <h2 className={styles.formTitle}>Add new book</h2>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={styles.titleInput}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className={styles.authorInput}
          required
        />
        <button
          type="button"
          onClick={handleAddNewBook}
          className={styles.addBtn}
        >
          Add book
        </button>
      </form>
    </>
  );
};

export default Form;
