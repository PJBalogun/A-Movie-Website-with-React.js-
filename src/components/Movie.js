//components
import ActorsGrid from './Actors/ActorsGrid';
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfo/MovieInfoBar/MovieInfoBar";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Spinner from './Spinner/Spinner';
import ErrorPage from './ErrorPage/Errorpage';

//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId)

    if (loading) return <div style={{ marginTop: "40vh" }}><Spinner /></div>
    if (error) return <ErrorPage />
    return (
        <div style={{ marginTop: "5rem" }}>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                revenue={movie.revenue}
                budget={movie.budget}
            />
            <ActorsGrid
                actors={movie.actors}
            />
        </div>

    )
}
export default Movie;