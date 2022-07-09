import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';
import movieData from "./sample-data"

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
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movie")
      .then(response => {
        if (!response.ok) {
          throw Error (response.text)
        } else {
          return response.json()
        }
      })
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        console.log(error)
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
