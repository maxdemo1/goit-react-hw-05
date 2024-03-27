import toast, { Toaster } from 'react-hot-toast';
import styles from './MoviesSearch.module.css';

const MoviesPage = ({ changeQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.search.value === '') {
      toast.error('Please enter your request', {
        position: 'top-center',
        reverseOrder: false,
        duration: 1500,
      });

      return;
    }
    changeQuery(evt.target.elements.search.value);
  };

  return (
    <>
      <Toaster />
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
    </>
  );
};

export default MoviesPage;
