import React from "react"

function GridMovie({movieData}) {
  console.log(movieData)

    return(
      <div className="GridMovie">
        <img src={movieData.poster_path} height="300" width="200"></img>
        <h2>{movieData.title}</h2>
      </div>
    )

}

export default GridMovie;