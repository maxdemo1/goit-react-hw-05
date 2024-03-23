import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import clsx from 'clsx';
import MovieDetails from './components/MovieDetails/MovieDetails';

function summaryClass(LinkState) {
  const { isActive } = LinkState;
  return clsx(styles.navLink, {
    [styles.activeLink]: isActive,
  });
}

const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink className={summaryClass} to="/">
          Home
        </NavLink>
        <NavLink className={summaryClass} to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
