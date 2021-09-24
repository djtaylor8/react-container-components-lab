import React from 'react' 

const Review = ({ display_title, byline, summary_short }) => {
        return (
        <div className="review">
            <h3>{display_title}</h3>
            Author: <span>{byline}</span>
            <ul>
            <li>{summary_short}</li>
            </ul>
        </div>
        );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews