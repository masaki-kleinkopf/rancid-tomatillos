import React, { Component } from "react"
import Header from "./components/Header"
import GridView from "./components/GridView"
import './App.css'
import getData from "./apiCalls"
import SingleMovie from "./components/SingleMovie"
import { Route } from "react-router-dom"

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      gridView: true,
      error:"",
    }
  }

  componentDidMount = () => {
    getData("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(data => {this.setState({movies: data.movies})})
      .catch(error => {
        this.setState({error:error.message})
      })
  }

  toggleGridView = () => {
    this.setState({gridView: !this.state.gridView})
  }

  render() {
    return (
      <div className="App">
        <Header 
          toggleGridView={this.toggleGridView}
          gridView={this.state.gridView}
          />
        <Route 
        exact path="/" 
        render={()=>  
          <GridView 
            toggleGridView={this.toggleGridView}
            movies={this.state.movies}
            />} 
          />
          <Route 
          exact path="/:movieId" 
          render={({match})=>  
            <SingleMovie 
              id={match.params.movieId} 
            />} 
          />
          {this.state.error && <p>Oops! Something went wrong!</p>}
      </div>
    )
  }
}

export default App
