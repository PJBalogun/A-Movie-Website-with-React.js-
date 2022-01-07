import { useHomeFetch } from '../hooks/useHomeFetch';

//Components
import Hero from './Hero/Hero';
import MovieGrid from './MovieGrid/MovieGrid';
import Searchbar from './SearchBar/SearchBar';
import ErrorPage from './ErrorPage/Errorpage';

const Home = () => {
    const { state: movies, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
    return (
        <>
            {error && <ErrorPage />}
            {movies.results[0] && !searchTerm &&
                <Hero
                    image={{ backdrop: movies.results[0].backdrop_path, poster: movies.results[0].poster_path }}
                    title={movies.results[0].original_title}
                    summary={movies.results[0].overview}
                />
            }
            <Searchbar setSearchTerm={setSearchTerm} style={{ marginTop: searchTerm ? "5rem" : "" }} />
            <MovieGrid
                movies={movies}
                header={searchTerm ? "Search Result" : "Popular Movies"}
                loading={loading}
                onLoadMore={() => setIsLoadingMore(true)}
                error={error}
            />
        </>
    )
}
export default Home;