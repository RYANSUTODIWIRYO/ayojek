import React, {Component} from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { connect } from 'react-redux'
import { setLogin } from "../../store/action"

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

class LoginForm extends Component {
  state = {
    phone: "",
    code: "",
    confirmation: ""
  };

  // Login with phone number
  onPressLogin = async () => {
    const { phone } = this.state
    console.log('phone:', phone)
    
    // Find user in firestore
    let user = ""
    await firestore().collection("users").where("phone", "==", phone).get()
                    .then(response => {
                      response.forEach(res => {
                        user = res.data()
                      })
                    })
                    .catch(error => console.error("Error firestore :", error))

    console.log("onPressLogin user:", user)

    // if user is not exist, go to registerForm
    if (!user) {
      return Alert.alert(null, "Nomor kamu belum terdaftar, silakan daftar",
        [
          {
            text: "Daftar",
            onPress: () => this.props.navigation.navigate("RegisterForm")
          },
          {
            text: "Kembali"
          }
        ]
      )
    }

    // Log in with phone
    const confirmation = await auth().signInWithPhoneNumber(this.state.phone)
      .catch(error => {
        console.log('Error Login: ', error)
        return Alert.alert("Failed to login")
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
      console.log("Confirmation result :", result)
      this.props.doLogin()
    } catch (error) {
      console.log("Invalid Code :", error)
      Alert.alert("Kode OTP tidak valid")
    }
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
                placeholder="●●●●●●"
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
    // console.log("LoginForm is rendered")r
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

const mapDispatchToProps = (dispatch) => ({
  doLogin: () => dispatch(setLogin())
})

export default connect(null, mapDispatchToProps)(LoginForm)
