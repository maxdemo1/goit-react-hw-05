import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

const MoviesList = ({ trendingMoviesList }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {trendingMoviesList.map(
        ({ id: movieId, original_title, poster_path, title }) => {
          return (
            <li key={movieId} className={styles.listItem}>
              <NavLink
                to={`/movies/${movieId}`}
                state={location}
                className={styles.listLink}
              >
                <div className={styles.imgContainer}>
                  <img
                    className={styles.moviePoster}
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                  />
                </div>

                <p>{title}</p>
              </NavLink>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default MoviesList;
