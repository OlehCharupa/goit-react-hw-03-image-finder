import React, { Component } from 'react';
import "./App.css"
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import axios from "axios";
import Loader from 'react-loader-spinner'



class App extends Component {
    state = {
        cards: [],
        loader: true,
    }

    componentDidMount() {
        axios.get(`https://pixabay.com/api/?key=18623369-889f6d1cb3a21a0bcc2be87ce&q=yellow+flowers&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => response.data)
            .then(data => {
                const result = data.hits
                this.setState({
                    cards: result,
                    loader: false
                })
            })
    }
    render() {
        const { cards, loader } = this.state
        return (
            <>
                <Searchbar />
                {loader ? <Loader type="Grid" color="#00BFFF" height={380} width={380}
                /> : <ImageGallery cards={cards} />}
                <Button />
            </>
        );
    };
}
export default App;