import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'GCsklmMZbfCbGdesh1TSRerJXHINmPJN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    fetchReviews() {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    componentDidMount() {
        this.fetchReviews()
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <div className="split right">
                <h3>Recent NYT Movie Reviews</h3>
                <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}
