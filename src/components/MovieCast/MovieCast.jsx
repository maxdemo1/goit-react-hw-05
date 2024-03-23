import { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import { requestMovieCastById } from '../../services/api';
import styles from './MovieCast.module.css';

const MovieCast = ({ movieId }) => {
  const [loaderState, setLoaderState] = useState(false);
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    const getMovieComents = async () => {
      try {
        setLoaderState(true);
        const {
          data: { cast },
        } = await requestMovieCastById(movieId);
        console.log([...cast.slice(0, 10)]);
        setCastData([...cast.slice(0, 10)]);
      } catch (error) {
        console.log('error');
      } finally {
        setLoaderState(false);
      }
    };
    getMovieComents();
  }, [movieId]);
  return (
    <div>
      {loaderState && <Loader />}
      {castData.length > 0 ? (
        <ul>
          {castData.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImg}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
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
