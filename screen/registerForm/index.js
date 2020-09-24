import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '+62',
  };

  // Register
  //   onPressRegister(){}

  render() {
    return (
      <View style={{padding: 20, backgroundColor: 'white'}}>
        {/* TITLE */}
        <View style={{marginTop: 25}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Daftar</Text>
          <Text>Lengkapi data dirimu di bawah ini, ya</Text>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <View>
            <Text>
              Nama Lengkap <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Cth: Name"
              value={this.state.name}
              onChangeText={(name) => this.setState({name})}></TextInput>
          </View>

          <View style={{marginTop: 25}}>
            <Text>
              Email <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Cth: name@email.com"
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}></TextInput>
          </View>

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
                  value={this.state.phone}
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
            <TouchableOpacity
            // onPress={onPressRegister}
            >
              <Image style={styles.button} source={images.forward} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    // height: 40,
    fontSize: 18,
    color: '#161f3d',
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
