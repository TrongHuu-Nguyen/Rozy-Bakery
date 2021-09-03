
import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap,Marker } from "react-google-maps"

const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={20}
          defaultCenter={{ lat: 16.06507380350847, lng: 108.21788079916168 }}
        >
             <Marker
              icon={{
                url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              position={{ lat: 16.06507380350847, lng: 108.21788079916168 }}
          />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
