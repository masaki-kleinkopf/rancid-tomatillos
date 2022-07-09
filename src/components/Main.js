import React from "react"
import GridMovie from "./GridMovie"
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
        {gridView ? movieCards : <h1>helloWorld</h1>}
      </main>
    )

}

export default Main;