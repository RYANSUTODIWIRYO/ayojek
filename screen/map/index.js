import React, {Component} from 'react';
import {LogBox, View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Location from '../location/index';
import Detail from '../detail/index';
import {ScrollView} from 'react-native-gesture-handler';

LogBox.ignoreLogs(['Require cycle']);

class Map extends Component {
  state = {
    region: {
      latitude: -6.2666843,
      longitude: 106.5514934,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  onRegionChange = (region) => {
    this.setState({region});
  };

  render() {
    console.log('Region :', this.state.region);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.73}}>
          <MapView
            style={{
              ...StyleSheet.absoluteFillObject,
            }}
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}></MapView>
        </View>
        <View style={{flex: 0.27}}>
          <Detail />
          {/* <Location /> */}
        </View>
      </View>
    );
  }
}

export default Map;

//note: detail: 0.73, 0.27
// location: 0.8, 0.2
