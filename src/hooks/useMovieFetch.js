import { useState, useEffect, useCallback } from "react";

//API
import API from '../server/API'

//helpers
import { isPersistedState } from "../helpers";

const initialState = {
    directors: [],
    actors: []
}
export const useMovieFetch = (movieId) => {
    //States
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true)
            //Get responses from API
            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId);

            //Get director only
            const directors = credits.crew.filter(member => { return member.job === "Director" });

            // set state
            setState({
                ...movie,
                directors,
                actors: credits.cast
            });
            setLoading(false)
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }, [movieId])

    //Set movie data fronm API or sessionStorage
    useEffect(() => {
        //get movie data from sessionStorage
        const sessionState = isPersistedState(movieId);

        //if data exist in sessionstorage, set movie state
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        // fetch movie from API
        fetchMovie()
    }, [fetchMovie, movieId])

    useEffect(() => {
        if (state.actors.length !== 0)
            sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])

    //return states for Movie components
    return {
        state,
        loading,
        error
    }
}