import React from "react";

const StarRating = ({ rating, onMouseOver }) => {
    return (
        <div style={{ fontSize: '20px' }}>
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onMouseOver={() => onMouseOver(starValue)}
                        style={{
                            cursor: 'pointer',
                            color: starValue <= rating ? '#EDA836' : 'gray'
                        }}
                    >
                        {starValue <= rating ? '★' : '☆'}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
