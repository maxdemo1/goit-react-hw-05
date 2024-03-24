import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './components/Loader/Loader';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviesSearchPage = lazy(() => import('./pages/MoviesSearchPage'));

const App = () => {
  return (
    <Navigation>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Navigation>
  );
};

export default App;
