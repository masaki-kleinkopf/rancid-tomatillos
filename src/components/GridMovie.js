import React from "react"
import "../css/GridMovie.css"

function GridMovie({ movieData }) {

    return (
      <div className="GridMovie">
        <img 
          src={movieData.poster_path}
          alt={`Poster for ${movieData.title}`}
          height="300" 
          width="200"
          className="grid-movie-image"
        />
        <h2 className="movie-title">{movieData.title}</h2>
      </div>
    )

}

export default GridMovie
