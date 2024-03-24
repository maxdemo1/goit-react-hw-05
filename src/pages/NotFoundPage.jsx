import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>Oops something goes wrong</h2>
      <Link to="/" className={styles.backToHome}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
