import React, { Component } from 'react'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <HomePage/>
      </div>

    );
  }
}

export default App;
