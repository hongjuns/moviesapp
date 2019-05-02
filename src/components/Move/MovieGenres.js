import React from 'react';
import './Movie.css';
const MovieGenres = ({genre}) => {
    return (
        <div>
            <span className="Movie__Genre">{genre}</span>
        </div>
    );
};

export default MovieGenres;