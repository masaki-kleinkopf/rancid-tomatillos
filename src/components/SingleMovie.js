import React from "react"
import "../css/SingleMovie.css"
import getData from "../apiCalls"
import { Link } from "react-router-dom"
import dayjs from "dayjs"


class SingleMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id:props.id,
      correctMovie:{},
      error:""
    }
  }

  componentDidMount = () => {
    this.props.setGridViewFalse()
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(data => {this.setState({correctMovie: data.movie})})
      .catch(error => {
        this.setState({error:error.message})
      })
    }

  render() {
    
    const { correctMovie:{title, poster_path, backdrop_path, tagline, overview, average_rating, release_date, genres, revenue, budget}, error } = this.state;
    const rating = average_rating && `${average_rating.toFixed(2)}/10`

    return error ? 
    <div className="error-element">
      <p className="error">Oh no, looks like this movie doesn't exist!</p>
      <Link to="/"><button className="toggle-button">Back to all movies</button></Link>
    </div>: 
      <div className="SingleMovie" style={{
          backgroundImage:`linear-gradient(to bottom, transparent 0%, black 60%),
          url(${backdrop_path})`,
          }}>
          <h3 className="single-movie-title"> 
            {title}
            <p className="single-movie-tagline"> {tagline}</p>
          </h3>
          <div className="poster-info-container">
            <div className="GridMovie">
                <img 
                  src={poster_path}
                  alt={`Poster for ${title}`}
                  height="300" 
                  width="200"
                  className="grid-movie-image"
                />
            </div>
            <div className="single-movie-info-container">
              <p className="single-movie-overview">Overview:<br></br>{overview}</p>
              <p>Average User Rating: {average_rating ? rating : average_rating}</p>
              <div className="single-movie-info">
                <p>Release Date: {dayjs(release_date).format('MMMM D, YYYY')}</p>
                {!!genres && <p>Genre: {genres.join(", ")}</p>} 
                {!!revenue && <p>Revenue: ${revenue}</p>} 
                {!!budget  && <p>Budget: ${budget}</p>}
              </div>
            </div>
          </div>
        </div>
  }
}


export default SingleMovie;