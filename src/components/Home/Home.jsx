import MoviesList from '../MovieList/MovieList';
import styles from './Home.module.css';

const Home = ({ trendingMoviesList }) => {
  return (
    <div className={styles.homeContainer}>
      <h2>Trending today</h2>
      <MoviesList trendingMoviesList={trendingMoviesList} />
    </div>
  );
};

export default Home;
