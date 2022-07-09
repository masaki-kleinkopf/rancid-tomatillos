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
      <h3 className="single-movie-title"> 
        {correctMovie.title}
        <h4 className="single-movie-tagline"> {correctMovie.tagline}</h4>
      </h3>
      <div className="single-movie-info-container">
        <p className="single-movie-overview">Overview:<br></br>{correctMovie.overview}</p>
        <p>Average User Rating: {Math.round(correctMovie.average_rating)}</p>
        <p className="single-movie-info">
          Release Date: {correctMovie.release_date} Genre:{correctMovie.genres} Revenue: ${correctMovie.revenue} Budget: ${correctMovie.budget}
        </p>
      </div>
    </div>
  )
}

export default SingleMovie;