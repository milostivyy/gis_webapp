import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  Polygon,
} from "react-google-maps";

const positions = [
  {lat: 18.975, lng: 72.825833},
  {lat: 17.70, lng: 72.1},
  {lat: 18.70, lng: 72.72},
  {lat:19.8762,lng:75.3433},
  {lat:18.5204,lng:73.8567},
  {lat:17.6599,lng:75.9064}
];
const points = [
  {location:[18.975,72.825833],weight:2},
  {location:[17.70, 72.1],weight:3},
  {location:[18.70,72.72],weight:1},
  {location:[19.8762,75.3433],weight:5},
  {location:[18.5204,73.8567],weight:6},
  {location:[17.6599,75.9064],weight:7}
];
const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDj26Nvzuw98GSnNTBOsIIRpHs1sdney5Q&libraries=visualization&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `150%` }} />
  }),
  withScriptjs,
  withGoogleMap
)
(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{lat: 18.975, lng: 72.825833}}>
     {/* <Marker position={{ lat: 18.975, lng: 72.825833 }} /> */}
      {positions.map((item, index) => 
        <Marker name="cities" position={item} key={index} />
      )}
      <Polyline
                path={positions}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "20px"
                        }
                    ]
                }}

          />
          {positions.length &&
          positions.map((item, key) => (
          <Polygon
            key={key}
            options={{
              fillColor: `#ffff00`,
              fillOpacity: 0.2,
              strokeWeight: 1,
              clickable: true,
              editable: false,
            }}
            paths={item.data}
          />
        ))}
            
  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));