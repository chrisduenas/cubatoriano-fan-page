import React, { Component } from 'react'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SocialMedia from './components/SocialMedia';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <HomePage/>
        <SocialMedia/>
      </div>

    );
  }
}

export default App;
