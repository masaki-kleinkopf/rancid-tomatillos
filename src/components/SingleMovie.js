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
    
    const { correctMovie, error } = this.state;

    return error ? <p className="error">Uh oh! Something went wrong</p>: 
      <div className="SingleMovie" style={{
          backgroundImage:`linear-gradient(to bottom, transparent 0%, black 60%),
          url(${correctMovie.backdrop_path})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100vw',
          height:'100vh'
          }}>
          <h3 className="single-movie-title"> 
            {correctMovie.title}
            <p className="single-movie-tagline"> {correctMovie.tagline}</p>
          </h3>
          <div className="single-movie-info-container">
            <p className="single-movie-overview">Overview:<br></br>{correctMovie.overview}</p>
            <p>Average User Rating: {Math.round(correctMovie.average_rating)}</p>
            <p className="single-movie-info">
              Release Date: {correctMovie.release_date} {!!correctMovie.genres && <p>Genre: {correctMovie.genres.join(", ")}</p>} {!!correctMovie.revenue && <p>Revenue: ${correctMovie.revenue}</p>} {!!correctMovie.budget  && <p>Budget: ${correctMovie.budget}</p>}
            </p>
          </div>
        </div>
        
      
   

  //   if (error) {
  //     return (<p className="error">Uh oh! Something went wrong</p>)
  //   } else {
  //     return (
  //       <div className="SingleMovie" style={{
  //         backgroundImage:`linear-gradient(to bottom, transparent 0%, black 60%),
  //         url(${correctMovie.backdrop_path})`,
  //         backgroundPosition: 'center',
  //         backgroundSize: 'cover',
  //         backgroundRepeat: 'no-repeat',
  //         width:'100vw',
  //         height:'100vh'
  //         }}>
  //         <h3 className="single-movie-title"> 
  //           {correctMovie.title}
  //           <p className="single-movie-tagline"> {correctMovie.tagline}</p>
  //         </h3>
  //         <div className="single-movie-info-container">
  //           <p className="single-movie-overview">Overview:<br></br>{correctMovie.overview}</p>
  //           <p>Average User Rating: {Math.round(correctMovie.average_rating)}</p>
  //           <p className="single-movie-info">
  //             Release Date: {correctMovie.release_date} Genre:{correctMovie.genres} Revenue: ${correctMovie.revenue} Budget: ${correctMovie.budget}
  //           </p>
  //         </div>
  //       </div>
  //     )
  // }
}
}


export default SingleMovie;