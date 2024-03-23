import { useEffect, useState } from 'react';
import Home from '../components/Home/Home';
import Loader from '../components/Loader/Loader';
import { requestMoviesMain } from '../services/api';

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    const getTrendingList = async () => {
      try {
        setLoaderState(true);
        const { data } = await requestMoviesMain();
        setTrendingMoviesList(data.results);
      } catch (error) {
        console.log('error');
      } finally {
        setLoaderState(false);
      }
    };
    getTrendingList();
  }, []);

  return (
    <>
      {loaderState && <Loader />}
      {trendingMoviesList.length > 0 && (
        <Home trendingMoviesList={trendingMoviesList} />
      )}
    </>
  );
};

export default HomePage;
