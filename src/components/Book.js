/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBookFromApi } from '../redux/books/booksSlice';
import styles from '../styles/Book.module.css';

const Book = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(item_id));
    dispatch(deleteBookFromApi(item_id));
  };
  return (
    <article className={styles.bookItem}>
      <section className={styles.bookInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>
          <span style={{ color: 'black' }}>by</span>
          {' '}
          {author}
        </p>
        <section className={styles.actionBtn}>
          <button type="button" className={styles.btn}>
            Comments
          </button>
          <button type="button" onClick={handleRemove} className={styles.btn}>
            Remove
          </button>
          <button type="button" className={styles.btn}>
            Edit
          </button>
        </section>
      </section>
      <section className={styles.progress}>
        <div className={styles.progressChart} />
        <div className={styles.progressMetric}>
          <p className={styles.value}>65%</p>
          <p className={styles.completeStatus}>Completed</p>
        </div>
      </section>
      <section className={styles.currentChap}>
        <p className={styles.currentChapTitle}>Current chapter</p>
        <p className={styles.chapter}>Chapter 6</p>
        <button type="button" className={styles.updateBtn}>
          update progress
        </button>
      </section>
    </article>
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
