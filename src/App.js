import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import MapContainer from './MapContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

export default App;
