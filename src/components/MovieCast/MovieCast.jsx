import { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import { requestMovieCastById } from '../../services/api';
import styles from './MovieCast.module.css';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const [loaderState, setLoaderState] = useState(false);
  const [castData, setCastData] = useState([]);
  const searchParamsData = useParams();
  const movieId = searchParamsData.movieId;

  useEffect(() => {
    const getMovieComents = async () => {
      try {
        setLoaderState(true);
        const {
          data: { cast },
        } = await requestMovieCastById(movieId);
        setCastData([...cast.slice(0, 12)]);
      } catch (error) {
        console.log('error');
      } finally {
        setLoaderState(false);
      }
    };
    getMovieComents();
  }, [movieId]);

  return (
    <div className={styles.castListContainer}>
      {loaderState && <Loader />}
      {castData.length > 0 ? (
        <ul className={styles.castList}>
          {castData.map(actor => (
            <li key={actor.id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImg}
              />
              <p className={styles.name}>{actor.name}</p>
              <p>
                Character:{' '}
                <span className={styles.name}>{actor.character}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Unfortunately, we have not info about this cast.</div>
      )}
    </div>
  );
};

export default MovieCast;
