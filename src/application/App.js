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
        <img src="./wdi22gradphoto.jpeg" />
        <img src="./sign22high.png" />
      </div>
    )
  }
}

export default App
