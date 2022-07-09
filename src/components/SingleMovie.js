import React from "react"

function SingleMovie ({movieInFocus, movies}) {

  const correctMovie = movies.find(movie => movie.id === movieInFocus)

  return (
    <div>
      <img src={correctMovie.poster_path} height="300" width="200"></img>
      <p>Title: {correctMovie.title}</p>
      <p>Rating: {correctMovie.average_rating}</p>
      <p>Release Date {correctMovie.release_date}</p>
    </div>
  )
}

export default SingleMovie;