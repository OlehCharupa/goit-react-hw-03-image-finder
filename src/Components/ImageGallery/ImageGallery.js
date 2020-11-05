import "./ImageGallery.css"
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {

    render() {
        const { cards } = this.props
        return (
            <ul className="ImageGallery">
                {cards.map(card => <ImageGalleryItem {...card} key={card.id} />)}
            </ul>
        );
    }
}

ImageGallery.propTypes = {

};

export default ImageGallery;