import React, { Component } from 'react';
import {MoveCard} from '../'

class MoveList extends Component {
    render() {
        const vals = this.props;
        return (
            <div>
                <h1>{vals.title}</h1>
                <MoveCard poster={vals.poster}/>
            </div>
        );
    }
}

export default MoveList;