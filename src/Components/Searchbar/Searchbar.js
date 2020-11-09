import React, { useState } from 'react';
import "./Searchbar.css"
import PropTypes from 'prop-types';
import { getImages } from '../../helpers/helpers';


const Searchbar = ({ updateCards }) => {
    const [search, setSearch] = useState("")

    const inputHendler = ({ target }) => {
        const { value } = target
        setSearch(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        getImages(search)
            .then(data => {
                const result = data.hits
                updateCards(result)
            })

        setSearch("")
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={onSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    onChange={inputHendler}
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