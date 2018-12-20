import React from "react";
import { Platform, View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { Location, Permissions } from "expo";

export default class MapCompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 24.918266,
        longitude: 67.10272,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: {
        myMarker: {
          latitude: 24.918266,
          longitude: 67.10272,
          title: "My Marker",
          description: "My marker"
        },
        venueMarker: {
          latitude: this.props.navigation.state.params.latlng.lat,
          longitude: this.props.navigation.state.params.latlng.lng,
          title: this.props.navigation.state.params.name,
          description: "Venue's marker"
        }
      }
    };
  }

  static navigationOptions = {
    title: "Map"
  };

  render() {
    const { region, markers } = this.state;
    return (
      <MapView 
      showsCompass={true}
      zoomControlEnabled={true}
      loadingEnabled={true}
      mapType='hybrid' showsUserLocation={true} style={styles.Map} region={region}>
        <Marker
          key={markers.myMarker.title}
          coordinate={{
            latitude: markers.myMarker.latitude,
            longitude: markers.myMarker.longitude
          }}
          title={markers.myMarker.title}
          description={markers.myMarker.description}
        />
        <Marker
        pinColor={'lightblue'}
          key={markers.venueMarker.title}
          coordinate={{
            latitude: markers.venueMarker.latitude,
            longitude: markers.venueMarker.longitude
          }}
          title={markers.venueMarker.title}
          description={markers.venueMarker.description}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
