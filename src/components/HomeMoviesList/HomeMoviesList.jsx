import { NavLink } from 'react-router-dom';

const HomeMoviesList = ({ trendingMoviesList }) => {
  return (
    <ul>
      {trendingMoviesList.map(({ id: movieId, original_title }) => {
        return (
          <li key={movieId}>
            <NavLink to={`/movies/${movieId}`}>{original_title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeMoviesList;
