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
  Alert
} from 'react-native';

export default class LoginForm extends Component {
  state = {
    phone: "",
    code: "",
    confirmation: ""
  };

  // Login with phone number
  onPressLogin = async () => {
    console.log('phone:', this.state.phone)

    const confirmation = await auth().signInWithPhoneNumber(this.state.phone)
      .catch(error => {
        console.log('Error Login: ', error)
        Alert.alert("Failed to login")
      })

    console.log("confirmation: ", confirmation )
    this.setState({
      confirmation
    })
  }

  // Pressed after user insert code number
  onPressConfirmCode = async () => {
    const { code, confirmation } = this.state
    try {
      const result = await confirmation.confirm(code)
      console.log("Result :", result)
    } catch (error) {
      console.log("Invalid Code :", error)
    }
  }

  // Check this.state.confirmation is changed or not
  componentDidUpdate(prevProps, prevState) {
    if (this.state.confirmation !== prevState.confirmation) {
      // console.log('masuuuuuuuuuuuukkkkkkkkkkkkkkkkkkkkkk')
      this.getUser()
    }
  }

  // Get user information from firebase
  getUser = () =>  {   
    auth().onAuthStateChanged(user => {
        if(user) {
          console.log("get user: ", user)
          return this.props.setLogin()
        }
      }
    )
  }


  // Form is showed after user press "masuk"
  LoginFormNumber = () => (
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

  LoginFormOTP = () => {
    const { phone } = this.state

    return (
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
          <TouchableOpacity onPress={this.onPressConfirmCode}>
            <Image style={styles.button} source={images.forward} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }

  

  render() {
    const { confirmation } = this.state
    
    if (!confirmation) {
      return (
        this.LoginFormNumber()
      )
    }

    return(
      this.LoginFormOTP()
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
