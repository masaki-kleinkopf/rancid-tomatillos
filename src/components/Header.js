import React from "react"
import "../css/Header.css"
import { Link } from "react-router-dom"

function Header({gridView, toggleGridView}) {

  return (
    <header>
      <h1 className="header-text">Rancid Tomatillos</h1>
      {!gridView && 
      <Link to = "/">
        <button className="header-toggle-button"onClick={toggleGridView}>Return to all movies</button>
      </Link>
      
      }
    </header>
  )
}

export default Header;