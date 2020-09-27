import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

export default class Order extends Component {
  state = {};

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={{flex: 0.7}}>
            <Text style={styles.containerText}>0E2171</Text>
          </View>
          <View style={{flex: 0.3, flexDirection: 'row', left: 30}}>
            <Image
              source={images.phone}
              style={{width: 30, height: 30, marginRight: 10}}
            />
            <Image source={images.chat} style={{width: 30, height: 30}} />
          </View>
        </View>
        {/* DESTINATION */}
        <View style={styles.destinationWraper}>
          <View>
            <View style={styles.SectionStyle}>
              <Image source={images.lokasi} style={styles.ImageStyle} />
              <View style={{marginLeft: 8}}>
                <Text>Pickup location</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Jl. Mushola An Nur No.9
                </Text>
              </View>
            </View>

            <View style={styles.destinationMiddle}>
              <Text>● 26.1km</Text>
            </View>

            <View style={styles.SectionStyle}>
              <Image source={images.tujuan} style={styles.ImageStyle} />
              <View style={{marginLeft: 8}}>
                <Text>Drop off location</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Monumen Nasional
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* PAYMENT */}
        <View style={styles.container}>
          <View style={{flex: 0.7}}>
            <View style={styles.SectionStyle}>
              <Image source={images.cash} style={styles.ImageStyle} />
              <Text style={{fontWeight: 'bold'}}>CASH</Text>
            </View>
          </View>
          <View style={{flex: 0.3, flexDirection: 'row', left: 15}}>
            <Text>118rb - 147rb</Text>
          </View>
        </View>
        {/* DRIVER */}
        <View style={styles.container}>
          <View style={{flex: 0.7}}>
            <Text style={styles.containerText}>Rasito</Text>
          </View>
          <View style={{flex: 0.3, flexDirection: 'row', left: 30}}>
            <Image
              source={images.driver}
              style={{width: 70, height: 70, marginRight: 10}}
            />
          </View>
        </View>
        {/* <View>
          <Image
            source={images.backgroundOrder}
            style={{width: windowWidth - 100, height: windowHeight - 300}}
          />
        </View> */}
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = {
  phone: require('../../asset/image/phone.png'),
  chat: require('../../asset/image/chat_.png'),
  lokasi: require('../../asset/image/lokasi.png'),
  tujuan: require('../../asset/image/tujuan.png'),
  cash: require('../../asset/image/cash.png'),

  driver: require('../../asset/image/driver.png'),

  backgroundOrder: require('../../asset/image/backgroundOrder.jpeg'),
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cecece',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  containerText: {
    color: 'black',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  destinationWraper: {
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cecece',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  destinationMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginLeft: 55,
  },
});
