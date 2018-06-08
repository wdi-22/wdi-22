import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <img src="./sign22high.png" alt="Sign with 22 on it" />
          </div>
          <ul>
            <li><a>Home</a></li>
            <li><a>Link2</a></li>
            <li><a>Events</a></li>
          </ul>
        </header>
        <div className="App-content">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    )
  }
}

export default App
