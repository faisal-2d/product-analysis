import React from 'react';

const Review = (props) => {

    const {name, rating, comment} = props.review;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Rating: {rating}</h3>
            <p>{comment}</p>
        </div>
    );
};

export default Review;