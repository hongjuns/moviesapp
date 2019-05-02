import React, { Component } from 'react';
import {MoveCard , MovieGenres} from '../'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

class MoveList extends Component {
    render() {
        const movies = this.props;
        return (
            <div className="Movie">
                <div className="Movie__Column">
                    <MoveCard poster={movies.poster} />
                </div>  

                <div className="Movie__Column">
                   <h1>{movies.title}</h1>
                   <div className="Movie__Genres">
                        {movies.genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                    </div>
                    <div className="Movie__Synopsis">
                        <LinesEllipsis
                            text={movies.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            />   
                    </div>
                </div>      
        </div>
        );
    }
}

export default MoveList;