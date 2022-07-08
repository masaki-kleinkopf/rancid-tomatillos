import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import GridMovie from "./components/GridMovie"
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Header />
        <Main />
        <GridMovie />
      </div>
    );
  }
}

export default App;
