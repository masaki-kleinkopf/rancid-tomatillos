import React from "react"
import GridMovie from "./GridMovie"
import SingleMovie from "./SingleMovie"
import "../css/Main.css"

function Main ({movies, movieInFocus, gridView, displaySingleMovie}) {

  const movieCards = movies.map(movie => {
    return <GridMovie movieData={movie}
      key={movie.id}
      displaySingleMovie={displaySingleMovie}
      />
  })

  return(
      <main className={gridView ? "main-grid" : "main-single"}>
        {gridView ? movieCards : <SingleMovie movieInFocus={movieInFocus} movies={movies}/>}
      </main>
    )

}

export default Main;