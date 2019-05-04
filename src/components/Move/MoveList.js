import React, { Component , Fragment} from 'react';
import {MoveCard , MovieGenres} from '../'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

class MoveList extends Component {
  
    state = {
        editing: false,
        pname:""
    }
  
    send = (e) => {
       const test =  this.props;
       const { editing } = this.state;
       this.setState({
         pname : test,
         editing: !editing
        });
       
    }
    render() {
        const movies = this.props;
        const { editing } = this.state;
        console.log(editing);
        return (
        <div className="Movie">

            {editing ? (
                <Fragment>
                    <div className="BigMovie">
                        <img src={movies.poster} alt={movies.poster} onClick={this.send}/>
                    </div>
                </Fragment>
                ) : (
                <Fragment>
                    <div className="Movie__Column" onClick={this.send}>
                         <MoveCard poster={movies.poster}  />
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
                </Fragment>
                )}

                     
        </div>
        );
    }
}

export default MoveList;