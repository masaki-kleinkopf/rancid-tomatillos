import React from "react"
import "../css/SingleMovie.css"

function SingleMovie ({movieInFocus, movies}) {

  const correctMovie = movies.find(movie => movie.id === movieInFocus)

  return (
    <div className="SingleMovie" style={{
      backgroundImage:`url(${correctMovie.backdrop_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width:'100vw',
      height:'100vh'
      }}>
      {/* <img src={correctMovie.backdrop_path} height="300" width="100%"></img> */}
      <img src={correctMovie.poster_path} height="300" width="200"></img>
      <p>Title: {correctMovie.title}</p>
      <p>Rating: {correctMovie.average_rating}</p>
      <p>Release Date {correctMovie.release_date}</p>
    </div>
  )
}

export default SingleMovie;