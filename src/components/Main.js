import React, { Component } from "react"
import GridMovie from "./GridMovie"
import "../css/Main.css"

function Main ({movies, movieInFocus, gridView, toggleGridView}) {

  const movieCards = movies.map(movie => {
    return <GridMovie movieData={movie}
      key={movie.id}
      toggleGridView={toggleGridView}
      />
  })

  return(
      <main>
        {gridView ? movieCards : <h1>helloWorld</h1>}
      </main>
    )

}

export default Main;