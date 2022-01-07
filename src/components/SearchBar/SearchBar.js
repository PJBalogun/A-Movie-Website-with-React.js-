import React, { useState, useEffect } from 'react';

//Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import styles from './SearchBar.module.css'


const SearchBar = ({ setSearchTerm, style }) => {
    const [searchState, setSearchState] = useState('');
    //const initial = useRef(true);

    useEffect(() => {
        if (searchState === "") return;
        const timer = setTimeout(() => {
            setSearchTerm(searchState);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, searchState])
    let searchHandler = (event) => {
        setSearchState(event.target.value);
    }
    return (
        <div className={styles.search_bar_container} style={style}>
            <div className={styles.search_bar}>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type='text'
                    placeholder='Search Movies'
                    onChange={searchHandler}
                    value={searchState}
                />
            </div>
        </div >
    )
}
export default SearchBar;