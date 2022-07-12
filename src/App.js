import React, { Component } from "react"
import Header from "./components/Header"
import GridView from "./components/GridView"
import './App.css';
import movieData from "./sample-data"
import getData from "./apiCalls"
import SingleMovie from "./components/SingleMovie"
import { Route } from "react-router-dom"

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      gridView: true,
      error:"",
    };
  }

  componentDidMount = () => {
    getData("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(data => {this.setState({movies: data.movies})})
      .catch(error => {
        this.setState({error:error.message})
      })
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
        <Route exact path = "/" render = {()=>  
          <GridView toggleGridView={this.toggleGridView}
            // gridView={this.state.gridView} 
            movies={this.state.movies}
            movieInFocus={this.state.movieInFocus}/>} />
          <Route exact path = "/:id" render = {({match})=>  
            <SingleMovie movieInFocus={match.params.id} movies={this.state.movies}/>} />
          {this.state.error && <p>Oops! Something went wrong!</p>}
      </div>
    );
  }
}

export default App;
