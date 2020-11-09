import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Modal.css"

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === "Escape") {
            this.props.toggleModal()
        }
    }


    render() {
        const { toggleModal, largeImageURL } = this.props
        return (
            <div className="Overlay" onClick={toggleModal}>
                <div className="Modal">
                    <img src={largeImageURL} alt="большое изображение" />
                </div>
            </div>);
    }
}

Modal.propTypes = {
    toggleModal: PropTypes.func,
    largeImageURL: PropTypes.string
};

export default Modal;