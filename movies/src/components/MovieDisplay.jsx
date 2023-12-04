import React from 'react'

function MovieDisplay({movie}) {
    if (!movie) {
        return <div>Please Choose a movie</div>;
      }

    return (
        <div>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
        </div>
    )
}

export default MovieDisplay