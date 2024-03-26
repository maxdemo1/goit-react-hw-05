import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import Loader from '../Loader/Loader';
import { requestMovieById } from '../../services/api';
import styles from './MovieDetails.module.css';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

const MovieDetails = () => {
  const [loaderState, setLoaderState] = useState(false);
  const [movieData, setMovieData] = useState(null);

  const location = useLocation();
  const goBack = useRef(location.state || '/');
  const { movieId } = useParams();
  useEffect(() => {
    setMovieData(null);
    async function getMovieById() {
      try {
        setLoaderState(true);
        const { data } = await requestMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaderState(false);
      }
    }

    getMovieById();
  }, [movieId]);

  return (
    <>
      {loaderState && <Loader />}
      {movieData !== null && (
        <div>
          <div className={styles.buttonContainer}>
            <Link className={styles.goBackBtn} to={goBack.current}>
              Go back
            </Link>
            <FaLongArrowAltLeft className={styles.arrowSVG} />
          </div>
          <div className={styles.basicInfoContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt={movieData.title}
              className={styles.poster}
            />
            <div className={styles.textInfo}>
              <h2>
                {movieData.original_title}({movieData.release_date.slice(0, 4)})
              </h2>
              <p>User score: {Math.ceil(movieData.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <p>{movieData.genres.map(e => e.name).join(', ')}</p>
            </div>
          </div>
          <div className={styles.additionalIfnoContainer}>
            <h4>Addional information</h4>
            <div className={styles.additionaLinksContainer}>
              <Link to="cast" className={styles.additionaLinks}>
                Cast
              </Link>
              <Link to="reviews" className={styles.additionaLinks}>
                Reviews
              </Link>
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
