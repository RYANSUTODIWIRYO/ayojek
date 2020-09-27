import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Location extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        {/* CHOOSE LOCATION */}
        <View style={styles.sectionStyle}>
          <Image source={images.lokasi} style={styles.imageStyle} />
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'space-around',
              flex: 1,
            }}>
            {/* FIRST BUTTON */}
            <View style={{flex: 0.5}}>
              <TouchableOpacity
                style={[styles.buttonStyle, {backgroundColor: '#00aa13'}]}
                onPress={() => this.props.setValue("centerMarker", true, "startMarker")}>
                <Text style={styles.textStyle}>Pilih lewat peta</Text>
              </TouchableOpacity>
            </View>
            {/* SECOND BUTTON */}
            <View style={{flex: 0.5}}>
              <TouchableOpacity
                style={[styles.buttonStyle, {backgroundColor: '#F57B1F'}]}
                onPress={() => this.props.setValue("centerMarker", false)}>
                <Text style={styles.textStyle}>Lokasi kamu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* LINE */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e5e5'}} />
        </View>

        {/* DESTINATION */}
        <View style={styles.sectionStyle}>
          <Image source={images.tujuan} style={styles.imageStyle} />
          {/* THIRD BUTTON */}
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={[styles.buttonStyle, {backgroundColor: '#00aa13'}]}
              onPress={() => this.props.setValue("centerMarker", true, "destinationMarker")}>
              <Text style={styles.textStyle}>Pilih lewat peta</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PESEN AYOJEK */}
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View>
            <Image source={images.thumbsUp} style={{width: 60, height: 60}} />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginRight: 50,
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 13}}>
              Betul, pesen Ayojek aja
            </Text>
            <Text style={{fontSize: 12}}>
              Bisa fokus nikmatin pemandangan sampe tujuan~
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const images = {
  ride: require('../../asset/image/ride.png'),
  lokasi: require('../../asset/image/lokasi.png'),
  tujuan: require('../../asset/image/tujuan.png'),
  peta: require('../../asset/image/peta.png'),
  tambah: require('../../asset/image/tambah.png'),
  thumbsUp: require('../../asset/image/thumbs-up.png'),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
    padding: 5,
  },
  content: {
    marginTop: 8,
    backgroundColor: '#f8f8ff',
    borderRadius: 25,
    // padding: 5,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 10,
  // },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textStyle: {fontWeight: 'bold', color: 'white'},
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
    // borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 20,
  },
});
