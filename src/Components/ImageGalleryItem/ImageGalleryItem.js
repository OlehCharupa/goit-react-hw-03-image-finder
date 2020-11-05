import "./ImageGalleryItem.css"
import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL, type }) => {
    return (
        <li className="ImageGalleryItem">
            <img src={webformatURL} alt={type} className="ImageGalleryItem-image" />
        </li>);
};

export default ImageGalleryItem;