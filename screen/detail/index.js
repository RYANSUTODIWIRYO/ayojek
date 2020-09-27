import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Detail extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Mau naik apa?</Text>
        <Text style={styles.textDescription}>Harga lebih terjangkau</Text>
        <Image source={images.ride} style={styles.image} />
        <Text style={styles.textTitle}>goRide</Text>
        <Text style={styles.textDescription}>Rp 35.000</Text>

        <TouchableOpacity onPress={() => {}} style={styles.buttonOrder}>
          <Text style={styles.buttonOrderText}>Order GoRide</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const images = {
  ride: require('../../asset/image/ride.png'),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 300,
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
    padding: 20,
  },
  textTitle: {
    fontSize: 20,
    color: '#222',
  },
  image: {marginTop: 15, height: 60, width: 60},
  buttonOrder: {
    backgroundColor: '#00aa13',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 10,
    width: 150,
    borderRadius: 25,
  },
  buttonOrderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
