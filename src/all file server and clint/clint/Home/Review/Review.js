import React from 'react';

const Review = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <p>Description: {description}</p>
                <p>Rating: {rating} Star</p>
            </div>
        </div>
    );
};

export default Review;