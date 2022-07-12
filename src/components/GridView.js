import React from "react"
import GridMovie from "./GridMovie"
import "../css/Main.css"
import { Link } from "react-router-dom"

function GridView ({movies, toggleGridView}) {

  const movieCards = movies.map(movie => {
    return (
      <Link 
        to={`/${movie.id}`} 
        onClick={toggleGridView} 
        key={movie.id}
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

export default GridView;