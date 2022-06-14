import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDj26Nvzuw98GSnNTBOsIIRpHs1sdney5Q&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 19.7515, lng: 75.7139 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 18.975, lng: 72.825833 }} />
    )}
  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
