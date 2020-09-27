import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

export default class Promo extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          {/* VOUCHER */}
          <View style={styles.firstContainer}>
            <View style={styles.voucherContent}>
              <View style={{marginVertical: 10, marginHorizontal: 5}}>
                <Text style={styles.voucherText}>0</Text>
                <Text style={styles.voucherText}>Vouchers</Text>
                <Text style={styles.voucherText}>Bisa dipakai</Text>
              </View>
            </View>

            <View style={styles.langgananContent}>
              <View style={{marginVertical: 10, marginHorizontal: 5}}>
                <Text style={styles.voucherText}>0</Text>
                <Text style={styles.voucherText}>Langganan</Text>
                <Text style={styles.voucherText}>Lagi aktif</Text>
              </View>
            </View>

            <View style={styles.missionsContent}>
              <View style={{marginVertical: 10, marginHorizontal: 5}}>
                <Text style={styles.voucherText}>0</Text>
                <Text style={styles.voucherText}>Missions</Text>
                <Text style={styles.voucherText}>Lagi berjalan</Text>
              </View>
            </View>
          </View>
          {/* PROMO */}
          <View style={styles.secondContainer}>
            <View style={styles.promoContent}>
              <TextInput
                placeholder="Masukkan kode promo"
                style={styles.promoTextInput}></TextInput>
              <Image source={images.promo} style={styles.promoImage1} />
              <Image source={images.forward} style={styles.promoImage2} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const images = {
  promo: require('../../asset/image/promo_.png'),
  forward: require('../../asset/image/forward.png'),
};

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  voucherContent: {backgroundColor: '#FD9E4E', borderRadius: 5, width: 120},
  langgananContent: {backgroundColor: '#3DC4E1', borderRadius: 5, width: 120},
  missionsContent: {backgroundColor: '#B46EAD', borderRadius: 5, width: 120},
  voucherText: {color: 'white', fontSize: 15},

  secondContainer: {marginHorizontal: 16, flexDirection: 'row', paddingTop: 16},
  promoContent: {position: 'relative', flex: 1, justifyContent: 'center'},
  promoTextInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8E8',
    borderRadius: 25,
    height: 50,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  promoImage1: {
    position: 'absolute',
    top: 10,
    left: 12,
    width: 30,
    height: 30,
  },
  promoImage2: {
    position: 'absolute',
    top: 12,
    right: 10,
    width: 22,
    height: 22,
  },
});
