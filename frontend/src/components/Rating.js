import React from 'react';

const Rating = ({ value, numOfReviews, color }) => {

    const rating = [...Array(5)].map((v, i) => {
        return (
            <span key={i} style={{ color }}>
                <i className={value >= i + 1 ? "fas fa-star" : value > i ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
        )

    });

    return (
        <div className="rating">
            {rating} ({numOfReviews})
        </div>
    );
}


Rating.defaultProps = {
    color: "#f8e825"
}
export default Rating;
