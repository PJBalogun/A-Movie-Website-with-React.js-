//Link
import { Link } from 'react-router-dom';

//styles
import styles from './Header.module.css';
//Logos
import MovieLogo from '../../images/movie-logo.png'
import TMDBLogo from '../../images/tmdb_logo.svg'

const Header = () => (
    <div className={styles.header}>
        <div className={styles["logo-container"]}>
            <Link to="/"> <img src={MovieLogo} alt="site-logo" className={styles.logo} /></Link>
            <img src={TMDBLogo} alt="tmdb-logo" className={styles.tmdb_logo} />
        </div>
    </div>
)

export default Header;