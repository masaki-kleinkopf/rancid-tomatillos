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
      movieInFocus: null
    };
  }

  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  };

  toggleGridView = () => {
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
      </div>
    );
  }
}

export default App;
