import React from 'react';
import './Movie.css';

const MoveCard = ({poster}) => {
    return (
        <div>
            <img src={poster} alt={poster} className="Movie__Poster"/>
        </div>
    );
};

export default MoveCard;