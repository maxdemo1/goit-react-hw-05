import axios from 'axios';

const API_ACCESS_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzkwNDE2Njg5YmE2ZmI4YWFhNGUxZjNlNjQyNDJjOCIsInN1YiI6IjY1ZmM5N2ZhN2Y2YzhkMDE3YzZkNjU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJXl0DGnrH1uwX7q_N44A109roztIzbZ3RhvrfSCjn8';

const options = {
  headers: {
    Authorization: API_ACCESS_TOKEN,
  },
};

export async function requestMoviesMain() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return data;
}

export async function requestMovieById(movieId) {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
}

export async function requestMovieCastById(movieId) {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
}

export async function requestMovieReviewsById(movieId) {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
}

export async function requestMoviesByKeyword(userQuery) {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${userQuery}&include_adult=true&language=en-US&page=1`,
    options
  );
  return data;
}
