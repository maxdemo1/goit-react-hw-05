import styles from './MoviesSearch.module.css';

const MoviesPage = ({ query, changeQuery }) => {
  const handleInput = evt => {
    changeQuery(evt.target.value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    changeQuery('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        placeholder="Search movies"
        type="text"
        value={query}
        onChange={handleInput}
      />
    </form>
  );
};

export default MoviesPage;
