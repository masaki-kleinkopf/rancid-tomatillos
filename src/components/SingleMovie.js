import React from "react"
import "../css/SingleMovie.css"

function SingleMovie ({movieInFocus, movies}) {

  const correctMovie = movies.find(movie => movie.id === movieInFocus)

  return (
    <div className="SingleMovie" style={{
    backgroundImage:`linear-gradient(to bottom, transparent 0%, black 60%),
    url(${correctMovie.backdrop_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width:'100vw',
      height:'100vh'
      }}>
      <p className="single-movie-title"> {correctMovie.title}</p>
      <p className="single-movie-tagline"> {correctMovie.tagline}</p>
      <p>Average User Rating: {Math.round(correctMovie.average_rating)}</p>
      <p className="single-movie-overview">Overview:<br></br>{correctMovie.overview}</p>
      <p className="single-movie-info">Genre:{correctMovie.genres} Revenue:{correctMovie.revenue} Budget:{correctMovie.budget}</p>
      <p className="single-movie-revenue">Revenue:{correctMovie.revenue}</p>
      <p className="single-movie-budget">Genre:{correctMovie.budget}</p>
      <p>Release Date: {correctMovie.release_date}</p>
    </div>
  )
}

export default SingleMovie;