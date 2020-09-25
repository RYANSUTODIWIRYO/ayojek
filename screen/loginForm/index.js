import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
// import firebase from 'react-native-firebase'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class LoginForm extends Component {
  state = {
    phone: "",
    code: "",
    confirm: ""
  };

  // Login with phone number
  onPressLogin = async () => {
    console.log('phone:', this.state.phone)

    const confirmation = await auth().signInWithPhoneNumber(this.state.phone)
      .catch(error => {
        console.log('Error Login: ', error)
      })

    console.log("confirmation: ", confirmation )
    this.setState({
      confirm: confirmation
    })
  }

  onPressConfirmCode = async () => {
    const { code, confirm } = this.state
    try {
      await confirm.confirm(code)
      console.log('suksess', suksess)
    } catch (error) {
      console.log("Invalid Code :", error)
    }
  }

  render() {
    const { phone, confirm } = this.state
    
    if (!confirm) {
    // if (false) {
      return (
        <View style={{padding: 20, backgroundColor: 'white'}}>
          {/* TITLE */}
          <View style={{marginTop: 25}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Masuk</Text>
            <Text>Silakan masuk dengan nomor HP-mu yang terdaftar</Text>
          </View>

          {/* FORM */}
          <View style={styles.form}>
            <View style={{marginTop: 25}}>
              <Text>
                Nomor HP <Text style={{color: 'red'}}>*</Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image style={styles.indonesia} source={images.indonesia} />
                </View>
                <View style={{flex: 1, marginLeft: 10}}>
                  <TextInput
                    style={styles.input}
                    placeholder="12345678"
                    defaultValue="+62"
                    keyboardType={"phone-pad"}
                    onChangeText={(phone) => this.setState({phone})}></TextInput>
                </View>
              </View>
            </View>

            {/* ONPRESS */}
            <View
              style={{
                marginTop: 25,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity onPress={this.onPressLogin}>
                <Image style={styles.button} source={images.forward} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }

    return(
      <View style={{padding: 20, backgroundColor: 'white'}}>
        {/* TITLE */}
        <View style={{marginTop: 25}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Kode OTP sudah dikirim!</Text>
          <Text style={{textAlign: "justify"}}>Masukan kode OTP yang kami SMS ke nomor HP-mu yang terdaftar {phone}</Text>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <View style={{marginTop: 25}}>
            <Text>
              OTP <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="●●●●"
                  keyboardType={"number-pad"}
                  onChangeText={(code) => this.setState({code})}></TextInput>
              </View>
            </View>
          </View>

          {/* ONPRESS */}
          <View
            style={{
              marginTop: 25,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={this.onPressLogin}>
              <Image style={styles.button} source={images.forward} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const images = {
  indonesia: require('../../asset/image/indonesia.png'),
  forward: require('../../asset/image/forward-button.png'),
};

const styles = StyleSheet.create({
  form: {
    marginTop: 25,
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#161f3d'
  },
  indonesia: {
    width: 28,
    height: 28,
  },
  button: {
    height: 38,
    width: 38,
  },
});
