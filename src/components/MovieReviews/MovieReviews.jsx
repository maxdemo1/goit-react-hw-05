import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { requestMovieReviewsById } from '../../services/api';
import styles from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [loaderState, setLoaderState] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const searchParams = useParams();
  const movieId = searchParams.movieId;

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setLoaderState(true);
        const {
          data: { results },
        } = await requestMovieReviewsById(movieId);
        setReviewsData(results);
      } catch (error) {
        console.log('error');
      } finally {
        setLoaderState(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {loaderState && <Loader />}
      {reviewsData.length > 0 ? (
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {reviewsData.map(review => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.listContainer}>
          <h5>Unfortunately, there are no reviews for this movie yet</h5>
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
