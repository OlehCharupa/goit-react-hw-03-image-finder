import React, { useState } from 'react';
import "./Searchbar.css"
import PropTypes from 'prop-types';
import { getImages } from '../../helpers/helpers';


const Searchbar = ({ updateCards, search, setSearch }) => {
    // const [search, setSearch] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
        getImages(search)
            .then(data => {
                const result = data.hits
                updateCards(result)
            })
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={onSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    onChange={setSearch}
                    name="search"
                    value={search}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    updateCards: PropTypes.func
};

export default Searchbar;