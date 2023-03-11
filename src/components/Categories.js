import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  return (
    <article className={styles.container}>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
        className={styles.checkStatus}
      >
        Check status
      </button>
      <p>{categories}</p>
    </article>
  );
};

export default Categories;
