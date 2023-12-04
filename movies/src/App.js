import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import { useState } from 'react';



function App() {

  const apiKey = 'd0aed252'
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=godfather`
  
  //--------------{{STABLISH STATE}}

  const [movie, setMovie] = useState(null)

  //----------{{FUNCTIONS}}

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    const data = await response.json()
    console.log(data)
    setMovie(data)
    console.log('current movie:', movie)
  }

  return (
    <div className="App">
      <h1>Movies</h1>
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
