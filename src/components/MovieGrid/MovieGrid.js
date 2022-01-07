import styles from './MovieGrid.module.css'
//components
import Grid from '../../UI/Grid'
import Thumb from '../Thumb/Thumb'
import Spinner from '../Spinner/Spinner'
import Button from '../Button/Button'

const MovieGrid = ({ movies, header, loading, onLoadMore }) => {
    let movieGrid = movies.results.length === 0 && !loading ? <p className={styles.no_result}>No result found</p>
        : movies.results.map(movie =>
            <Thumb Image={movie.poster_path} key={movie.id} movieId={movie.id} clickable={true} title={movie.title} />
        )
    return (
        <div>
            <Grid header={header}>
                {movieGrid}
            </Grid>
            {loading && <Spinner />}
            {movies.page < movies.total_pages && !loading && <Button onClick={onLoadMore} text="Load More" />}
        </div>
    )
}
export default MovieGrid;