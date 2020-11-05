import React from 'react';
import "./Searchbar.css"
import PropTypes from 'prop-types';

const Searchbar = props => {
    return (
        <header className="Searchbar">
            <form className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {

};

export default Searchbar;