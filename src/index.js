import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const positions = [
  {lat: 18.975, lng: 72.825833},
  {lat: 18.70, lng: 72.8258},
  {lat: 17.70, lng: 72.1},
  {lat: 18.70, lng: 72.72}
];

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDj26Nvzuw98GSnNTBOsIIRpHs1sdney5Q&v=3.exp&libraries=geometry,drawing,places",
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
        <Marker name="Dolores park" position={item} key={index} />
      )}
  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));