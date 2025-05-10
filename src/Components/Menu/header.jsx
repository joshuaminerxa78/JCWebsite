import React from 'react'
import { Link } from "react-router-dom";
import './header.css'

function header() {
  return (
    <>
      <header id="menu">
        <Link to='/home'>
        <h3 className="text">Home</h3>
        </Link>
        <Link to="/about">
          <h3 className="text">About</h3>
        </Link>
        <Link to="/project">
          <h3 className="text">Project</h3>
        </Link>
        <Link to="/contact">
          <h3 className="text">Contact</h3>
        </Link>
      </header>
    </>
  )
}

export default header