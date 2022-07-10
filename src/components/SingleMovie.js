import React from "react"
import "../css/SingleMovie.css"
import getData from "../apiCalls"


class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.movieInFocus,
      correctMovie:{},
      error:""
    }
  }

  componentDidMount = () => {
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(data => {this.setState({correctMovie: data.movie})})
      .catch(error => {
        this.setState({error:error.message})
      })
    }

  render() {
    
    const { correctMovie:{title, backdrop_path, tagline, overview, average_rating,release_date,genres, revenue, budget}, error } = this.state;

    return error ? <p className="error">Uh oh! Something went wrong</p>: 
      <div className="SingleMovie" style={{
          backgroundImage:`linear-gradient(to bottom, transparent 0%, black 60%),
          url(${backdrop_path})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100vw',
          height:'100vh'
          }}>
          <h3 className="single-movie-title"> 
            {title}
            <p className="single-movie-tagline"> {tagline}</p>
          </h3>
          <div className="single-movie-info-container">
            <p className="single-movie-overview">Overview:<br></br>{overview}</p>
            <p>Average User Rating: {Math.round(average_rating)}</p>
            <div className="single-movie-info">
              Release Date: {release_date} {!!genres && <p>Genre: {genres.join(", ")}</p>} {!!revenue && <p>Revenue: ${revenue}</p>} {!!budget  && <p>Budget: ${budget}</p>}
            </div>
          </div>
        </div>
  }
}


export default SingleMovie;