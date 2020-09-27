import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class Detail extends Component {
  state = {
    selected: null,
    SelectedButton: '',
    price: '',
  };

  handleSelection(flag, button) {
    if (flag == true) {
      this.setState({selected: false});
    }
    this.setState({SelectedButton: button});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Mau naik apa?</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => this.handleSelection('flag', '1')}
              style={{
                borderRadius: 15,
                backgroundColor:
                  this.state.SelectedButton === '1' ? '#00aa13' : null,
              }}>
              <View style={styles.viewContainer}>
                <Image source={images.ride} style={styles.image} />
                <View style={styles.viewContent}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color:
                        this.state.SelectedButton === '1' ? 'white' : 'black',
                    }}>
                    AyoRide
                  </Text>
                  <Text
                    style={{
                      color:
                        this.state.SelectedButton === '1' ? 'white' : 'black',
                    }}>
                    Rp 35.000
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.handleSelection('1', 'flag')}
              style={{
                borderRadius: 15,
                backgroundColor:
                  this.state.SelectedButton === '1' ? null : '#00aa13',
              }}>
              <View style={styles.viewContainer}>
                <Image source={images.car} style={styles.image} />
                <View style={styles.viewContent}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color:
                        this.state.SelectedButton === 'flag'
                          ? 'white'
                          : 'black',
                    }}>
                    AyoCar
                  </Text>
                  <Text
                    style={{
                      color:
                        this.state.SelectedButton === 'flag'
                          ? 'white'
                          : 'black',
                    }}>
                    Rp 80.000
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonOrder}>
            <Text style={styles.buttonOrderText}>Order sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const images = {
  ride: require('../../asset/image/ride.png'),
  car: require('../../asset/image/car.png'),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 200,
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
    // alignItems: 'center',
    padding: 20,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  image: {marginTop: 15, height: 45, width: 45},
  buttonOrder: {
    backgroundColor: '#00aa13',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 10,
    width: '100%',
    borderRadius: 25,
    height: 35,
  },
  buttonOrderText: {color: '#fff', fontWeight: 'bold', fontSize: 18},
  selected: {backgroundColor: '#e5f2e5'},
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 50,
  },
  viewContent: {marginLeft: 10, justifyContent: 'center', alignItems: 'center'},
});
