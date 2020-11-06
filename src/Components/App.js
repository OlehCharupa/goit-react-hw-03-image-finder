import React, { Component } from 'react';
import "./App.css"
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from 'react-loader-spinner'
import { getImages } from '../helpers/helpers';



class App extends Component {
    state = {
        cards: [],
        query: "all",
        page: 1,
        loader: true,
        error: false
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
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }
    componentDidMount() {
        getImages(this.state.query).then(data => {
            const result = data.hits
            this.setState({
                cards: [...result],
                loader: false,
                page: 2
            })
        })
    }
    render() {
        const { cards, loader, url, apiKey, query, perPage, page } = this.state
        return (
            <>
                <Searchbar
                    updateCards={this.updateCards}
                    url={url}
                    apiKey={apiKey}
                    query={query}
                    perPage={perPage}
                    page={page} />
                {loader
                    ? <Loader type="Grid" color="#00BFFF" height={380} width={380} />
                    : <><ImageGallery cards={cards} /> <Button lodeMore={this.lodeMore} /></>}

            </>
        );
    };
}
export default App;