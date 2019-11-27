import React from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title:  "john",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
  },
  {
    title: "mary",
    poster: "https://img.etimg.com/thumb/msid-58980445,width-643,imgsize-182458,resizemode-4/some-fun-facts-about-disneys-most-popular-character-donald-duck.jpg",
 
  },
  {
    title:"sam",
    poster:  "https://upload.wikimedia.org/wikipedia/en/6/6d/Plutodog.gif",
  },
  {
    title:   "belle", 
    poster: "https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_minnie_ddt-16970_3_4a2aa999.jpeg?region=0,0,600,600&width=480",
  },
]

class App extends Components {

  state = {
    greeting: 'hello'
  }


  render() {
  return (
    <div className="App">
     {movies.map((movie, index) => {
       return <Movie title={movie.title} poster={movie.poster} key={index} />

     })}

    

    </div>
  );
};

export default App;