//helpers
import { calcTime, convertMoney } from '../../../helpers';

//styles
import styles from './MovieInfoBar.module.css';

const MovieInfoBar = ({ time, budget, revenue }) =>
    <div className={styles.movie_info_bar_container}>
        <div className={styles.movie_info_bar}>
            <div className={styles.bar}>
                <p><span>Running:</span><span>{calcTime(time)}</span></p>
            </div>
            <div className={styles.bar}>
                <p><span>Budget:</span><span>{convertMoney(budget)}</span></p>
            </div>
            <div className={styles.bar}>
                <p><span></span>Revenue:<span>{convertMoney(revenue)}</span></p>
            </div>
        </div>
    </div>

export default MovieInfoBar;