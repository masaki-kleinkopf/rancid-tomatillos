import React from "react"
import GridMovie from "./GridMovie"
import SingleMovie from "./SingleMovie"
import "../css/Main.css"
import { Link } from "react-router-dom"

function GridView ({movies, movieInFocus, gridView, displaySingleMovie, toggleGridView}) {

  const movieCards = movies.map(movie => {
    return (
      <Link to = {`/${movie.id}`} onClick={toggleGridView}>
        <GridMovie movieData={movie}
          key={movie.id}
          displaySingleMovie={displaySingleMovie}
          />
      </Link>
    )
  })

  return(
      <main className= "main-grid" >
        {movieCards}
      </main>
    )

}

export default GridView;