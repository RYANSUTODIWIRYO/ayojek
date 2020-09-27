import React, { Component } from 'react';
import { LogBox, View, Text, StyleSheet, Image, Alert, PermissionsAndroid, TouchableOpacity } from 'react-native'
import MapView, { Marker, Polyline } from "react-native-maps"
// import polyline from '@mapbox/polyline'
import Geolocation from '@react-native-community/geolocation'
import Location from '../location/index';
import Detail from '../detail/index';

LogBox.ignoreLogs(['Require cycle']);

class Map extends Component {
    state = {
        region: {
            // latitude: -6.175634,
            // longitude: 106.827171,
            latitude: -6.2666843,
            longitude: 106.5514934,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        userRegion: {
            latitude: -6.175634,
            longitude: 106.827171,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        startMarker:
            "",        
                // {
                //     coordinate: { latitude: -6.2666843, longitude: 106.5514934 },
                //     title: "My Home",
                //     description: "This is My Home"
                // },
        destinationMarker:
            "",         
                // {
                //     coordinate: { latitude: -6.267337, longitude: 106.557169 },
                //     title: "My Destination",
                //     description: "This is My Destination"
                // },
        // coords: [],
        centerMarker: false,
        userMarker: false,
        onFocused: ""
    }

    setValue = (key, val, onFocused) => {
        this.setState({
            [key]: val,
            onFocused
        })
    }

    setMarker = () => {
        const { onFocused, region } = this.state
        console.log("inilohhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        this.setState({
            [onFocused]: {
                coordinate: {
                    latitude: region.latitude,
                    longitude: region.longitude
                },
                // title: marker === "startMarker" ? "Lokasi Jemput" : "Lokasi Tujuan" 
            },
            centerMarker: false
        })
    }

    onRegionChangeHandler = (region) => {
        // console.log('changed')
        this.setState({region})
    }

    onMapReadyHandler = () => {
        const { region } = this.state
        console.log('inilohhh :', region)
        const coord = {
            latitude: region.latitude,
            longitude: region.longitude
        }
        this.mapView.animateToRegion(coord, 2000)
    }

    componentDidMount() {
        this.getCurrentLocation()
    }

    requestPermissionLocation = async () => {
        try {
            const locationPermission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Access Required',
                    message: 'This App needs to Access your location',
                },
            )

            // If not granted
            if (locationPermission !== PermissionsAndroid.RESULTS.GRANTED) {
                return false
            }
            return true

          } catch (err) {
            console.warn("Failed permission :", err);
          }
    }

    getCurrentLocation = async () => {
        const permission = await this.requestPermissionLocation()

        if(!permission) {
            return Alert.alert("Failed to get current location")
        }

        Geolocation.getCurrentPosition(
            (position) => {
                const currentLatitude = parseFloat(JSON.stringify(position.coords.latitude))
                const currentLongitude = parseFloat(JSON.stringify(position.coords.longitude))

                this.setState({
                    userRegion: {
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                      }
                })
            },
            (error) => {
                console.error("Error getCurrentLocation :", error);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            }
        )
    }



    // componentDidMount() {
    //     this.fetchCoords()
    // }

    // fetchCoords = async () => {
    //     const { startMarker, destinationMarker } = this.state
    //     const startCoor = `${startMarker.coordinate.latitude}, ${startMarker.coordinate.longitude}`
    //     const destCoor = `${destinationMarker.coordinate.latitude}, ${destinationMarker.coordinate.longitude}`

    //     fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startCoor}&destination=${destCoor}&key=AIzaSyBeFS28cRVhf6JH0-sI2Iz0Aq3ZjOxOqa4`)
    //         .then(res => {
    //             console.log('res :', res)
    //             res.json()})
    //         .then(resJson => {
    //             console.log('resJson :', resJson)
    //             polyline.decode(
    //             resJson.routes[0].overview_polyline.points
    //             )
    //         })
    //         .then(points => points.map((point, idx) => {
    //             return {
    //                 latitude: point[0],
    //                 longitude: point[1]
    //             }
    //         }))
    //         .then(coords => this.setState({coords}))
    //         .catch(error => {
    //             console.error("Error fetch :", error);
    //         })
    // }


    render() {
        const { region, userRegion, startMarker, destinationMarker, centerMarker, userMarker, onFocused /*coords*/ } = this.state 
        // console.log("Region :", region)
        // console.log('start marker :', startMarker)
        // console.log('dest marker :', destinationMarker)
        // console.log('on focus :', onFocused)
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.73}}>
                    <MapView
                        style={{
                            ...StyleSheet.absoluteFillObject
                        }}
                        ref={ref => (this.mapView = ref)}
                        initialRegion={region}
                        onRegionChange={this.onRegionChangeHandler}
                        // onMapReady={this.onMapReadyHandler}
                    >
                        
                        {/* Center marker */}
                        { centerMarker ? 
                            <Marker
                                // title="Tengah"
                                coordinate={{latitude: region.latitude, longitude: region.longitude}}
                                // description="Ini Tengah"
                                style={styles.marker}
                                onPress={this.setMarker}
                                >
                                <Text style={{backgroundColor: "green", color: "white", borderRadius: 5, marginBottom: 5, padding: 5}}>Pilih Lokasi</Text>
                                <Image source={images.pin} style={{width:30, height:30}}/>
                            </Marker> :
                            null
                        }

                        {/* User marker */}

                        { userMarker ? 
                            <Marker
                                title="Your Location"
                                coordinate={{latitude: userRegion.latitude, longitude: userRegion.longitude}}
                                description="This is your location"
                                style={styles.marker}
                            >
                                <Text>You are here</Text>
                                <Image source={images.pin} style={{width:30, height:30}}/>
                            </Marker> :
                            null
                        }

                        {/* Starting point marker */}
                        { startMarker ? 
                            <Marker
                                // title={startMarker.title}
                                coordinate={startMarker.coordinate}
                                // description={startMarker.description}
                                style={styles.marker}
                            >
                                <Text style={styles.markerText}>
                                    Lokasi Jemput
                                </Text>
                                <Image source={images.pin} style={{width:30, height:30}}/>
                            </Marker>
                            : null
                        }

                        {/* Destination point marker */}
                        { destinationMarker ?
                            <Marker
                                // title={destinationMarker.title}
                                coordinate={destinationMarker.coordinate}
                                // description={destinationMarker.description}
                                style={styles.marker}
                                onPress={this.setMarker}
                            >
                                <Text style={styles.markerTextDestination}>
                                    Lokasi Tujuan
                                </Text>
                                <Image source={images.pin} style={{width:30, height:30}}/>
                            </Marker>
                            : null
                        }


                        {startMarker && destinationMarker ?
                            <Polyline
                                coordinates={[
                                    { latitude: startMarker.coordinate.latitude, longitude: startMarker.coordinate.longitude },
                                    { latitude: destinationMarker.coordinate.latitude, longitude: destinationMarker.coordinate.longitude }                            
                                ]}
                                strokeColor="green"
                                strokeWidth={4}
                            /> :
                            null
                        }
                    </MapView>
                </View>
                <View style={{flex: 0.27}}>
                    {
                        startMarker && destinationMarker ? 
                        <Detail /> :
                        <Location
                            setValue={this.setValue}
                        />
                    }
                </View>
            </View>            
        )
    }
}
 
const images = {
    pin: require('../../asset/image/pin.png'),
};

const styles = StyleSheet.create({
    marker: {alignItems: "center"},
    markerText: {color: "green", fontWeight: "bold"},
    markerTextDestination: {color: "orange", fontWeight: "bold"}
})

export default Map;
