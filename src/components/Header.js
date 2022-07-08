import React, { Component } from "react"
import "../css/Header.css"

class Header extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <h1 className="header-text">Rancid Tomatillos</h1>
      </header>
    )
  }

}

export default Header;