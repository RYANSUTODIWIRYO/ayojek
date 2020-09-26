import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const usersCollection = firestore().collection('users');

export default class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '+62',
    confirmation: '',
    code: '',
    uid: '',
  };

  // Register name,email, phone ==> moving to OTP
  // check whether phone number exist in firestore
  checkUserFirestore = () => {
    let user = '';
    firestore()
      .collection('users')
      .where('phone', '==', this.state.phone)
      .get()
      .then((querySnapshot) => {
        // if (querySnapshot.val()) {
        //   console.log('Phone Number exist');
        // } else {
        //   console.warn('Continue');
        // }
        // querySnapshot.forEach((documentSnapshot) => {
        // });
        querySnapshot.forEach((snapshot) => {
          user = snapshot.data();
        });
      });
    console.log('user', user);
  };

  onPressRegister = async () => {
    const {name, email, phone} = this.state;
    console.log(`name: ${name}, email: ${email}, phone: ${phone}`);

    let user = '';
    await firestore()
      .collection('users')
      .where('phone', '==', this.state.phone)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          user = snapshot.data();
        });
      });
    console.log('user =>', user);

    // if user is not exist, continue to OTP
    // else go to Login Form
    if (!user) {
      // Alert.alert('Success');
      console.log('phone:', phone);

      const confirmation = await auth()
        .signInWithPhoneNumber(phone)
        .catch((error) => {
          console.log('Error Login: ', error);
        });

      console.log('confirmation: ', confirmation);
      this.setState({
        confirmation: confirmation,
      });
    } else {
      return Alert.alert(null, 'Nomor HP-mu sudah terdaftar.', [
        {
          text: 'Masuk',
          onPress: () => this.props.navigation.navigate('LoginForm'),
        },
        {
          text: 'Kembali',
        },
      ]);
    }
  };

  // get&input OTP code ==> create firestore ==> will move to home
  onPressConfirmCode = async () => {
    let {uid, name, email, phone, code, confirmation} = this.state;
    // let uid = '';

    console.log('apayaaaa nama uidnya', uid);

    try {
      const result = await confirmation.confirm(code);
      // console.log('Result :', result);

      if (!uid) {
        await auth()
          .onAuthStateChanged((user) => {
            if (user) {
              console.log('get user bedaa: ', user);
              uid = user.uid;
              console.warn('UID NYA ===>', uid);
            }
          })
          .catch((error) => {
            console.error('EROR! =>>>', error);
          });
      }

      console.log('kepangggggiiiiill');
      firestore()
        .collection('users')
        .doc(uid)
        .set({
          name: name,
          email: email,
          phone: phone,
        })
        .then(() => {
          console.log('User added!');
          this.props.setLogin();
        });
    } catch (error) {
      console.log('Invalid Code :', error);
    }
  };

  // Check this.state.confirmation is changed or not
  componentDidUpdate(prevProps, prevState) {
    if (this.state.confirmation !== prevState.confirmation) {
      // console.log('masuuuuuuuuuuuukkkkkkkkkkkkkkkkkkkkkk')
      this.getUser();
    }
  }

  // Get user information from firebase
  getUser = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('get user: ', user);
        this.setState({uid: user.uid});
        console.info('UID NYA ===>', user.uid);
      }
    });
  };

  // create user to firestore
  createUserFirestore = () => {
    const {name, email, phone} = this.state;

    firestore()
      .collection('users')
      .add({
        name: name,
        email: email,
        phone: phone,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  RegisterFormNumber = () => {
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
              keyboardType="email-address"
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
                  keyboardType="phone-pad"
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
            <TouchableOpacity onPress={this.onPressRegister}>
              <Image style={styles.button} source={images.forward} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  RegisterFormOTP = () => {
    return (
      <View style={{padding: 20, backgroundColor: 'white'}}>
        {/* TITLE */}
        <View style={{marginTop: 25}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
            Selangkah lagi, nih!
          </Text>
          <Text style={{textAlign: 'justify'}}>
            Kamu tinggal memasukkan kode OTP yang kami SMS ke nomor HP-mu yang
            terdaftar {this.state.phone}
          </Text>
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
                  keyboardType={'number-pad'}
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
    );
  };

  render() {
    const {confirmation} = this.state;

    if (!confirmation) {
      return this.RegisterFormNumber();
    }
    return this.RegisterFormOTP();
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
