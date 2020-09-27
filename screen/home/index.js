import {connect} from 'react-redux';
import {setLogout} from '../../store/action';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          {/* SEARCH */}
          <View style={styles.firstContainer}>
            <View style={styles.searchContent}>
              <TextInput placeholder="Laper ?" style={styles.searchTextInput} />
              <Image source={images.search} style={styles.searchImage} />
            </View>
            <View style={styles.profileContent}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={images.profile}
                  style={{width: 48, height: 48}}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* GOPAY */}
          <View style={{marginHorizontal: 16, marginTop: 10}}>
            <View style={styles.gopayContent}>
              <View style={styles.gopayContent1}>
                <View style={{marginLeft: 8, marginBottom: 3}}>
                  <Image source={images.gopay} style={styles.gopayImage} />
                  <Text>Bayar pake GoPay lebih praktis!</Text>
                </View>
              </View>

              <View style={styles.gopayContent2}>
                <View style={styles.gopaySubContent}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={images.bayar_} style={styles.gopayIcon} />
                    <Text style={{color: 'white'}}>Bayar</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={images.isisaldo_} style={styles.gopayIcon} />
                    <Text style={{color: 'white'}}>Isi Saldo</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={images.lainnya_} style={styles.gopayIcon} />
                    <Text style={{color: 'white'}}>Lainnya</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* CONTENT */}
          <View style={{marginTop: 20, marginHorizontal: 16}}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Konten buat kamu
              </Text>
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
              <Image source={images.homeImage} />
              <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
                Pilih kategori lain, yuk?
              </Text>
              <Text style={{marginTop: 5, fontSize: 14}}>
                Ada banyak penawaran yang sayang kalo dilewatin, lho!
              </Text>
            </View>
          </View>

          {/* FEATURES */}
          <View style={{justifyContent: 'flex-end', marginVertical: 55}}>
            <View style={styles.featureContent}>
              {/* <View
              style={{
                borderWidth: 1,
                borderColor: '#cecece',
                margin: 15,
                width: 30,
                alignSelf: 'center',
              }}
            /> */}
              <View style={styles.featureSubContent}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Image source={images.goride} style={styles.featureImage} />
                  </TouchableOpacity>
                  <Text>GoRide</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Image source={images.gocar} style={styles.featureImage} />
                  </TouchableOpacity>
                  <Text>GoCar</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Image source={images.gofood} style={styles.featureImage} />
                  </TouchableOpacity>
                  <Text>GoFood</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Image source={images.goshop} style={styles.featureImage} />
                  </TouchableOpacity>
                  <Text>GoShop</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <View style={{position: 'absolute'}}>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={this.props.doLogout}>
              <Text style={styles.TextStyle}> Logout </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const images = {
  search: require('../../asset/image/search.png'),
  profile: require('../../asset/image/profile.png'),
  homeImage: require('../../asset/image/homeImage.png'),
  gopay: require('../../asset/image/gopay.png'),
  goride: require('../../asset/image/goride.png'),
  gocar: require('../../asset/image/gocar.png'),
  gofood: require('../../asset/image/gofood.png'),
  goshop: require('../../asset/image/goshop.png'),
  bayar_: require('../../asset/image/bayar_.png'),
  lainnya_: require('../../asset/image/lainnya_.png'),
  isisaldo_: require('../../asset/image/isisaldo_.png'),
};

const styles = StyleSheet.create({
  firstContainer: {marginHorizontal: 16, flexDirection: 'row', paddingTop: 16},
  searchContent: {position: 'relative', flex: 1, justifyContent: 'center'},
  searchTextInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
  },
  searchImage: {position: 'absolute', top: 16, left: 12, width: 15, height: 15},
  profileContent: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 16,
  },

  featureImage: {height: 35, width: 35, marginBottom: 4},
  gopayContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0083A1',
    borderRadius: 25,
    padding: 20,
  },
  gopayImage: {resizeMode: 'contain', aspectRatio: 2},
  gopayContent1: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    height: 85,
    width: 100,
    flex: 1,
  },
  gopayContent2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5,
  },
  gopaySubContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gopayIcon: {width: 42, height: 42},
  featureContent: {
    overflow: 'hidden',
    paddingBottom: 5,
    alignItems: 'center',
  },
  featureSubContent: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 380,
    height: 75,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  MainContainer: {
    backgroundColor: '#F5FCFF',
    position: 'relative',
    bottom: 20,
  },

  SubmitButtonStyle: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "center",
    height: 40
  },

  TextStyle: {
    // height: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold"
  },
});

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(setLogout()),
});

export default connect(null, mapDispatchToProps)(Home);
