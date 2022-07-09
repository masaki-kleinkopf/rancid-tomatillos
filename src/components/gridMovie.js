import React from "react"
import "../css/GridMovie.css"

function GridMovie({movieData, displaySingleMovie}) {

    return (
      <div className="GridMovie" onClick={() => displaySingleMovie(movieData.id)}>
        <img src={movieData.poster_path} 
        height="300" 
        width="200"
        className="grid-movie-image"
        ></img>
        <h2 className="movie-title">{movieData.title}</h2>
      </div>
    )

}

export default GridMovie;