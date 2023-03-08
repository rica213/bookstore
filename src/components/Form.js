import { addBook } from "../redux/books/booksSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleAddNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  }
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
