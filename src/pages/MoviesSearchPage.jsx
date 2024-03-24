import { useEffect, useState } from 'react';
import MoviesSearch from '../components/MoviesSearch/MoviesSearch';
import Loader from '../components/Loader/Loader';
import { requestMoviesByKeyword } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MovieList/MovieList';

const MoviesSearchPage = () => {
  const [movieQuery, setMovieQuery] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
  const [showList, setShowList] = useState(false);
  const userMovieQuery = movieQuery.get('query') ?? '';

  const changeQuery = evt => {
    setMovieQuery({ query: evt });
    if (evt === '') {
      setMovieQuery('');
    }
  };

  useEffect(() => {
    if (userMovieQuery === '') return;
    setShowList(false);
    const getMovieByKeyword = async () => {
      try {
        setLoaderState(true);
        const {
          data: { results },
        } = await requestMoviesByKeyword(userMovieQuery);
        setSearchResult(
          results.filter(result => {
            return result.poster_path !== null;
          })
        );
        setShowList(true);
      } catch (error) {
        console.log('error');
      } finally {
        setLoaderState(false);
      }
    };
    getMovieByKeyword();
  }, [userMovieQuery]);

  return (
    <div style={{ padding: '16px' }}>
      <MoviesSearch query={userMovieQuery} changeQuery={changeQuery} />
      {loaderState && <Loader />}
      {searchResult.length > 0 && userMovieQuery !== '' && showList && (
        <MoviesList trendingMoviesList={searchResult} />
      )}
    </div>
  );
};

export default MoviesSearchPage;
