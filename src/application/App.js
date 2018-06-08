import React, { Component } from 'react'
import Nav from '../navbar/Nav'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
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
