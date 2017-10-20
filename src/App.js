import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.getBusPoints = this.getBusPoints.bind(this);
  }

  getBusPoints() {
    const url = `http://gtfs.translink.ca/gtfsposition?apikey=${process.env['TRANSLINK']}`
    request
    .get(url)
    .set('accept', 'application/json')
    .end((err, res) => {
      if (err) throw err;
    });
  }

  render() {
    this.getBusPoints();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
