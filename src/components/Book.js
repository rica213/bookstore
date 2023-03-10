/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBookFromApi } from '../redux/books/booksSlice';

const Book = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(item_id));
    dispatch(deleteBookFromApi(item_id));
  };
  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        type="button"
        onClick={handleRemove}
      >
        Remove
      </button>
    </>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string,
};

Book.defaultProps = {
  item_id: '',
};

export default Book;
