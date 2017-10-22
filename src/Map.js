import React, { Component } from 'react';
import request from 'superagent';

class Map extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.getBusPoints = this.getBusPoints.bind(this);
  };

  getBusPoints() {
    request
    .get('/api')
    .set('accept', 'application/json')
    .end((err, res) => {
      if (err) throw err;
    });
  };

  render() {
    return (
      <div className="Map">
      </div>
    );
  }
}

export default Map;
