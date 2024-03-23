import HomeMoviesList from '../HomeMoviesList/HomeMoviesList';
import styles from './Home.module.css';

const Home = ({ trendingMoviesList }) => {
  return (
    <div className={styles.homeContainer}>
      <h2>Trending today</h2>
      <HomeMoviesList trendingMoviesList={trendingMoviesList} />
    </div>
  );
};

export default Home;
