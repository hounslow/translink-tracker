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
      positions: []
    };
    this.resizeView = this.resizeView.bind(this);
    this.getBusPoints = this.getBusPoints.bind(this);
    this.convertToPosition = this.convertToPosition.bind(this);
  }

  componentWillMount() {
    this.getBusPoints();
  }

  componentDidMount() {
    this.getBusPoints();
    const updateTime = 10000;
    setInterval(this.getBusPoints, updateTime);
  }

  resizeView(currentView) {
    let view = this.state.viewport;
    view.width = currentView.width;
    view.height = currentView.height;
    this.setState({
      viewport: view
    });
  }

  getBusPoints() {
    return request
    .get('/api').then(({body}) => {
      this.convertToPosition(body);
    });
  }

  convertToPosition(buses) {
    let positionArray = buses.map((bus) => ({lat: bus.Latitude, lon: bus.Longitude}));
    this.setState({positions: positionArray});
  }

  render() {
    const {viewport} = this.state;
    return (
      <div className="MapContainer">
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={this.resizeView}
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
