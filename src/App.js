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

  render() {
    return (
      <div className="App">
        <Header />
        <Main gridView={this.state.gridView} 
        movies={this.state.movies}
        movieInFocus={this.state.movieInFocus}/>
      </div>
    );
  }
}

export default App;
