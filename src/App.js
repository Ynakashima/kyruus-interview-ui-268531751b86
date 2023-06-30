import React, { Component } from 'react';
import Logo from './klogo.js';
import './App.css';
import Users from './Users.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>
        <div className="App-intro">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
