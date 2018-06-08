import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className="Nav-header">
        <div className="brand">
          <span className="brand-name">WDI-</span>
          <img src="./sign22high.png" alt="Sign with 22 on it" />
        </div>
        <div className="right">
          <a href="#">Home</a>
          <a href="#">Who?</a>
          <a href="#">Events</a>
        </div>
      </nav>
    )
  }
}

export default Nav
