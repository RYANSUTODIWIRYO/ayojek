import React, { Component } from 'react';
import { LogBox, View, Text, StyleSheet } from 'react-native'
import MapView, {Marker} from "react-native-maps"

LogBox.ignoreLogs([
  'Require cycle'
])

class Map extends Component {
    state = {
        region: {
            latitude: -6.2666843,
            longitude: 106.5514934,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
    }

    onRegionChange = (region) => {
        this.setState({region})
    }

    render() {
        console.log("Region :", this.state.region)
        return (
            <MapView
                style={{
                    ...StyleSheet.absoluteFillObject
                }}
                initialRegion={this.state.region}
                onRegionChange={this.onRegionChange}
            ></MapView>
        )
    }
}
 
export default Map;

