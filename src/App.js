import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi baby, Ni you xiang nian wo ma?
          </p>
          <a
            className="App-link"
            // href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>a. Hen duo</p>
            <p>b. wo xian nian ni</p>
            <p>c. baby... </p>
            <p>d. wo you</p>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
