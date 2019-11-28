import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

state = {}

    componentDidMount() {
     this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      // console.log(movie)
       return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} />
    })
       return movies
  }
   
   _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
      
    }) 
  }

  _callApi = () => {
     return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
      // call the response object
      // .then(movie => console.log(movie))
      // make the reponse object valid json type
      .then(movie => movie.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
  return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : "loading" }
    </div>
  );
};
  }
export default App;