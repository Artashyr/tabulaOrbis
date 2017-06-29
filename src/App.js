import React, { Component } from 'react';
import logo from './images/logo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="App-headerImage">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-intro">
                    Welcome to my table
                </p>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
