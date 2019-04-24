import React, { Component } from 'react';
import './App.css';
import {MoveList} from './components'

class App extends Component {
  
  state = {
  }
  
  componentDidMount(){
    setTimeout(()=> {
        this.setState({
          information: [
            {
              title: '올드보이',
              poster: 'http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201401/14/74/d0014374_52d48445edc68.jpg'
            },
            {
              title: '마블',
              poster: 'https://t1.daumcdn.net/cfile/tistory/27620B3D51DE386828'
            }
          ]
        })
    }, 5000)
   }
   _randerMovies = () =>{
    const movies = this.state.information.map((information,index) => {
      return <MoveList title={information.title} poster={information.poster} key={index}/>
    })
    return movies
  }
  
  render() {
        return (
            <div>
                {this.state.information ? this._randerMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;
