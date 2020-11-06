import "./Button.css"
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ lodeMore }) => {
    return (
        <button type="button" className="Button" onClick={lodeMore}>
            Load more
        </button>
    );
};

Button.propTypes = {
    lodeMore: PropTypes.func
};

export default Button;