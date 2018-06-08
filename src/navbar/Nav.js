import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <header className="Nav-header">
        <div className="brand">
          <img src="./sign22high.png" alt="Sign with 22 on it" />
          <span>WDI-22</span>
        </div>
        <div className="right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
        </div>
      </header>
    )
  }
}

export default Nav
