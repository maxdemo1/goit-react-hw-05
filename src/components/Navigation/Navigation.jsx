import clsx from 'clsx';
import styles from '../../App.module.css';
import { NavLink } from 'react-router-dom';

function summaryClass(LinkState) {
  const { isActive } = LinkState;
  return clsx(styles.navLink, {
    [styles.activeLink]: isActive,
  });
}
const Navigation = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <NavLink className={summaryClass} to="/">
          Home
        </NavLink>
        <NavLink className={summaryClass} to="movies">
          Movies
        </NavLink>
        <div></div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navigation;
