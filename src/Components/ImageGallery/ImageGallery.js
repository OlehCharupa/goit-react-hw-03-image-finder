import "./ImageGallery.css"
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ cards, activImages }) => {
    return (
        <ul className="ImageGallery">
            {cards.map(card => <ImageGalleryItem {...card} key={card.id} activImages={activImages} />)}
        </ul>
    );
}

ImageGallery.propTypes = {
    cards: PropTypes.array,
    activImages: PropTypes.func
};

export default ImageGallery;