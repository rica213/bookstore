import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/books', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navLeftSide}>
      <p className={styles.logo}>Bookstore CMS</p>
      <ul className={styles.menu}>
        {links.map((link) => (
          <li key={link.text} className={styles.menuItem}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.user}>
      <FontAwesomeIcon icon={faUser} className={styles.user} />
    </div>
  </nav>
);

export default Navbar;
