import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'GCsklmMZbfCbGdesh1TSRerJXHINmPJN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    fetchReviews(search) {
        fetch(URL + `&query=${search}`)
        .then(res => res.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchReviews(this.state.searchTerm)
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <div className="split left">
                <form onSubmit={this.handleSubmit} className="search">
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder={'Search all reviews'}></input>    
                </form>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}