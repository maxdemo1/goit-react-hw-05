import styles from './MoviesSearch.module.css';

const MoviesPage = ({ changeQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.search.value === '') return;
    changeQuery(evt.target.elements.search.value);
    evt.target.elements.search.value = '';
  };

  return (
    <form className={styles.searchForm} onSubmit={evt => handleSubmit(evt)}>
      <input
        className={styles.formInput}
        placeholder="Search movies"
        type="text"
        name="search"
      />
      <button type="submit" className={styles.submitBtn}>
        Search
      </button>
    </form>
  );
};

export default MoviesPage;
