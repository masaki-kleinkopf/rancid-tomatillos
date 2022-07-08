import React, { Component } from "react"
import GridMovie from "./GridMovie"

function Main ({movies, movieInFocus, gridView}) {

  const movieCards = movies.map(movie => {
    return <GridMovie movieData={movie}
      key={movie.id}/>
  })
  console.log(movies)

  return(
      <main>
        {gridView ? movieCards : <h1>helloWorld</h1>}
      </main>
    )

}

export default Main;