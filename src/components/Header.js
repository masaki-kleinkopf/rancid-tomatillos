import React, { Component } from "react"
import "../css/Header.css"

function Header({gridView, toggleGridView}) {

  return (
    <header>
      <h1 className="header-text">Rancid Tomatillos</h1>
      {!gridView && <button className="header-toggle-button"onClick={toggleGridView}>Return to all movies</button>}
    </header>
  )
}

export default Header;