import React, { Component } from 'react';
import request from 'superagent';
import ReactMapGL, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWhvdW5zbG93IiwiYSI6ImNqOHh2djFqeDAwMmkzMnFydzM1cGR1OXcifQ.3zYmhbaovOQuurUTWe9beA';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 49.2709,
        longitude: -123.1621,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        width: window.innerWidth,
        height: window.innerHeight
      },
      buses: [],
      positions: []
    };
    this.getBusPoints = this.getBusPoints.bind(this);
    this.convertToPosition = this.convertToPosition.bind(this);
  };

  componentWillMount() {
    this.getBusPoints();
  };

  // componentDidMount() {
  //   this.getBusPoints();
  // //   // this.convertToPosition(this.state.buses);
  // };

  getBusPoints() {
    return request
    .get('/api').then(({body}) => {
      this.setState({buses: body});
      this.convertToPosition(body);
    });
  };

  convertToPosition(buses) {
    let positionArray = [];
    buses.forEach((bus) => {
      positionArray.push({lat: bus.Latitude, lon: bus.Longitude});
      this.setState({positions: positionArray});
    });
  }

  render() {
    const {viewport} = this.state;
    return (
      <div className="MapContainer">
      <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={v => this.setState({viewport: v})}
      mapboxApiAccessToken={MAPBOX_TOKEN}>
      {this.state.positions.map((position, index) => (
        <Marker latitude={position.lat} longitude={position.lon} key={index}>
        </Marker>
      ))}
      </ReactMapGL>
      </div>
    );
  }
}

export default MapContainer;
