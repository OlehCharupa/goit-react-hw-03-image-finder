import "./ImageGallery.css"
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ cards }) => {
    return (
        <ul className="ImageGallery">
            {cards.map(card => <ImageGalleryItem {...card} key={card.id} />)}
        </ul>
    );
}

ImageGallery.propTypes = {
    cards: PropTypes.array
};

export default ImageGallery;