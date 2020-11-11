import React, { Component } from 'react';
import "./App.css"
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from 'react-loader-spinner'
import { getImages } from '../helpers/helpers';
import Modal from './Modal/Modal';



class App extends Component {
    state = {
        cards: [],
        query: "all",
        page: 1,
        loader: true,
        error: false,
        modalShow: false,
        largeImageURL: ""
    }
    updateCards = (cards) => {
        this.setState({
            cards,
            page: 2
        })
    }
    lodeMore = () => {
        const { query, page } = this.state
        getImages(query, page)
            .then(data => {
                this.setState(prev => ({
                    cards: [...prev.cards, ...data.hits],
                    page: prev.page + 1
                }))
            })
    }
    activImages = ({ target }) => {
        const image = target.dataset.source
        this.setState({
            largeImageURL: image
        })
        this.toggleModal()
    }
    toggleModal = () => {
        this.setState(state => ({
            modalShow: !state.modalShow,
        }))
    }
    scrollTo = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });

    }
    setSearch = ({ target }) => {
        this.setState({
            query: target.value
        })
    }
    componentDidMount() {
        console.log('componentDidMount');
        getImages(this.state.query).then(data => {
            const result = data.hits
            this.setState({
                cards: [...result],
                loader: false,
                page: 2
            })
        })
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        this.scrollTo()
    }
    render() {
        const { cards, loader, modalShow, largeImageURL, query } = this.state
        return (
            <>
                <Searchbar
                    search={query}
                    updateCards={this.updateCards}
                    setSearch={this.setSearch}
                />
                <ImageGallery cards={cards} toggleModal={this.toggleModal} activImages={this.activImages} />
                {loader
                    ? <Loader type="Grid" color="#00BFFF" height={380} width={380} />
                    : <> {cards.length && <Button lodeMore={this.lodeMore} />}
                    </>
                }
                {modalShow && <Modal toggleModal={this.toggleModal} largeImageURL={largeImageURL} />}

            </>
        );
    };
}
export default App;