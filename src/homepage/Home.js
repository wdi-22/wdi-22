import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <main className="home">
        <div>
          <h1>WDI-22</h1>
          <p>Who are we?  It is an understatement, and just generally regarded as common fact that WDI-22 is, and will always be the greatest group of people to <strong>ever</strong> come out of GA.  What is GA?  We are not here to promote it, but if you are interested... look it up! (Or click <a href="https://generalassemb.ly/">here</a>)  Why are we so great?  OMG!!!  So many reasons.  We come from diverse education backgrounds, and have diferent skill sets... but what we have in common is a love for coding and a willingness to help eachother out.  Many of us are green developers... but this group is the elite coders... connecting with anyone here is pure gold. Everyone single one of us... will succeed beyond human comprehension...  If you want to look success and pure potential in the eye(s) look to your right.  Wow.  Are you getting goose bumps?  Cuz I am.</p>
        </div>
        <div>
          <img src="./wdi22gradphoto.jpeg" alt="Sign with 22 on it" />
        </div>
      </main>
    )
  }
}

export default Home
