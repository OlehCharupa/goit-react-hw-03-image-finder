import "./ImageGalleryItem.css"
import React from 'react';
import PropTypes from "prop-types"

const ImageGalleryItem = ({ webformatURL, largeImageURL, type, activImages }) => {
    return (
        <li className="ImageGalleryItem" onClick={activImages}  >
            <img src={webformatURL} alt={type} className="ImageGalleryItem-image" data-source={largeImageURL} />
        </li>);
};
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    type: PropTypes.string,
    activImages: PropTypes.func
}
export default ImageGalleryItem;