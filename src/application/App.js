import React, { Component } from 'react'
import Nav from '../navbar/Nav'
import Home from '../homepage/Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    )
  }
}

export default App
