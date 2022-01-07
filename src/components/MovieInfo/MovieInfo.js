//Components
import Thumb from "../Thumb/Thumb";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../server/config";

//Styles
import { Div } from "./MovieInfo.styles";
import styles from "./MovieInfo.module.css"


const MovieInfo = ({ movie }) => {
    return (
        <Div
            desktopImage={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
            mobileImage={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
        >
            <div className={styles.movie_info_container}>
                <div className={styles.movie_info_image}>
                    <Thumb
                        Image={movie.backdrop_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : ""
                        }
                        clickable={false}
                        alt="movie-thumb"
                    />
                </div>
                <div className={styles.movie_info}>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className={styles.rating_directors}>
                        <div >
                            <h3>RATING</h3>
                            <div className={styles.score}>{movie.vote_average}</div>
                        </div>
                        <div className={styles.director}>
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )

}
export default MovieInfo;