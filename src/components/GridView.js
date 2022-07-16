import React from "react"
import GridMovie from "./GridMovie"
import "../css/Main.css"
import { Link } from "react-router-dom"

function GridView ({movies, toggleGridView}) {

  const movieCards = movies.map(movie => {
    return (
      <Link 
        key={movie.id}
        to={`/${movie.id}`} 
        onClick={toggleGridView} 
      >
        <GridMovie movieData={movie}/>
      </Link>
    )
  })

  return(
      <main className="main-grid">
        {movieCards}
      </main>
    )
}

export default GridView