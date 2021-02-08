import React from 'react';

import { FaSearch } from 'react-icons/fa'

import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <div className="search__form">
                <h1>Find a Recipe</h1>
                <form>
                    <input type="text" />
                    <button><FaSearch /></button>
                </form>
            </div>
        </div>
    )
}

export default Search
