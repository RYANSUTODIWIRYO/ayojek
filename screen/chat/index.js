import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';

export default class Chat extends Component {
  state = {};
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{marginHorizontal: 16, paddingTop: 16, flex: 1}}>
          {/*  */}
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Pilihan fitur
            </Text>
            <View style={{marginHorizontal: 16, marginTop: 8}}>
              <View style={styles.fiturContent}>
                <View style={styles.fiturSubContent}>
                  <TouchableOpacity>
                    <Image source={images.inbox} style={styles.fiturImage} />
                  </TouchableOpacity>
                  <Text style={styles.fiturText}>Inbox</Text>
                </View>
                <View style={styles.fiturSubContent}>
                  <TouchableOpacity>
                    <Image source={images.grupBaru} style={styles.fiturImage} />
                  </TouchableOpacity>
                  <Text style={styles.fiturText}>Grup Baru</Text>
                </View>
                <View style={styles.fiturSubContent}>
                  <TouchableOpacity>
                    <Image source={images.patungan} style={styles.fiturImage} />
                  </TouchableOpacity>
                  <Text style={styles.fiturText}>Patungan</Text>
                </View>
                <View style={styles.fiturSubContent}>
                  <TouchableOpacity>
                    <Image source={images.bayar} style={styles.fiturImage} />
                  </TouchableOpacity>
                  <Text style={styles.fiturText}>Bayar</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Chat Kamu */}
          <View
            style={{
              flex: 1,
              marginTop: 25,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Chat kamu</Text>
            <View style={{flexDirection: 'row', marginTop: 35}}>
              <View>
                <Image
                  source={images.chatKamu}
                  style={{width: 60, height: 60}}
                />
              </View>
              <View style={{marginHorizontal: 25, marginRight: 50}}>
                <Text style={{fontWeight: 'bold'}}>
                  Kamu belum chat siapa-siapa
                </Text>
                <Text>
                  Nanti kalo kamu udah nyapa, disapa, ngirim atau nerima GoPAy
                  dari Orang, bakal muncul disini.
                </Text>
              </View>
            </View>
          </View>
          {/* Mulai nge-chat */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonContent}>
              <Text style={styles.buttonText}>Mulai nge-chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const images = {
  inbox: require('../../asset/image/inbox.png'),
  grupBaru: require('../../asset/image/grupBaru.png'),
  patungan: require('../../asset/image/patungan.png'),
  bayar: require('../../asset/image/bayar.png'),
  chatKamu: require('../../asset/image/chatKamu.jpg'),
};

const styles = StyleSheet.create({
  fiturContent: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  fiturSubContent: {flex: 1, alignItems: 'center'},
  fiturText: {fontSize: 13, color: 'black', fontWeight: 'bold'},
  fiturImage: {width: 75, height: 75},
  buttonContainer: {flex: 1, justifyContent: 'flex-end', marginBottom: 36},
  buttonContent: {
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonText: {color: 'white', fontSize: 20},
});
