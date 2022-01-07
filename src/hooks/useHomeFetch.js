import { useState, useEffect } from 'react'

//API
import API from '../server/API';

//helpers
import { isPersistedState } from '../helpers';

// initial state
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
export function useHomeFetch() {
    //states
    const [state, setState] = useState(initialState);
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page)
            setState(prevState => ({
                ...movies,
                results:
                    page > 1 ? [...prevState.results, ...movies.results] : [...movies.results]
            }))
            setLoading(false)
        } catch (error) {
            setError(true);
            console.log(error)
        }
    };

    //for initial rendering and search
    useEffect(() => {
        //get data from sessionstorage
        if (searchTerm === "") {
            const sessionState = isPersistedState('homeState')

            //if data exist in sessionstorage, set movie state
            if (sessionState) {
                setState(sessionState);
                setLoading(false);
                return;
            }
        }
        //initial rendering 
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm, loading])

    // for loading more movies
    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, state.page])

    //Write to sessionStorage
    useEffect(() => {
        if (!searchTerm)
            if (state.page !== 0 && state.results.length !== 0)
                sessionStorage.setItem('homeState', JSON.stringify(state));

    }, [searchTerm, state])

    //return states to Home components
    return {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    }
};