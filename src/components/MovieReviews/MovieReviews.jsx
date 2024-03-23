import { useEffect, useState } from 'react';
import { requestMovieReviewsById } from '../../services/api';
import Loader from '../Loader/Loader';

const MovieReviews = ({ movieId }) => {
  const [loaderState, setLoaderState] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);

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
        <ul>
          {reviewsData.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Unfortunately, there are no reviews for this movie yet</div>
      )}
    </div>
  );
};

export default MovieReviews;
