This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

[Screenshot of map view](https://github.com/hounslow/translink-tracker/images/map-screen.png)

This map app displays the positions of translink buses in metro Vancouver. The positions are marked in black and are updated every 10 seconds. This information comes from Translink's API.

The map was created using Mapbox GL.

Frontend

Frontend was done using React

Backend

Backend is a simple Express server that requests from Translink's API, and that the client-side requests the bus information from using Superagent.

To Run

$ git clone git@github.com:hounslow/translink-tracker.git
$ npm install in root and in server as these have different dependencies.
$ npm start in both /server and the root
