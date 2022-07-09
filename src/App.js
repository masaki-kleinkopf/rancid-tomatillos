import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';
import movieData from "./sample-data"
import getData from "./apiCalls"

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      gridView: true,
      movieInFocus: null,
      error:"",
    };
  }

  componentDidMount = () => {
    getData("https://rancid-tomatillos.herokuapp.com/api/v2/movie")
      .then(data => {this.setState({movies: data.movies})})
      .catch(error => {
        this.setState({error:error.message})
      })
  };

  toggleGridView = () => {
    if (this.state.movieInFocus) {
      this.setState({movieInFocus: null})
    }
    this.setState({gridView: !this.state.gridView})
  }

  displaySingleMovie = (id) => {
    this.toggleGridView();
    this.setState({movieInFocus: id})
  }

  render() {
    return (
      <div className="App">
        <Header toggleGridView={this.toggleGridView}
          gridView={this.state.gridView}/>
        <Main displaySingleMovie={this.displaySingleMovie}
          gridView={this.state.gridView} 
          movies={this.state.movies}
          movieInFocus={this.state.movieInFocus}/>
          {this.state.error && <p>Oops! Something went wrong!</p>}
      </div>
    );
  }
}

export default App;
