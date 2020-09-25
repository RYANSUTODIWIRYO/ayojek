import React, { Component } from 'react'
import { LoginStack } from "./navigator"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import auth from '@react-native-firebase/auth';
import { View, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator()

class App extends Component {
  state = {
    isLogin: false
  }

  setLogin = () => {
    this.setState({isLogin: true})
  }

  // Get user is login or not
  componentDidMount = () => {
    auth().onAuthStateChanged(user => {
        if(user) {
          console.log("Auto signin: ", user)
          return this.setState({isLogin: true})
        }

        return console.log("Menuju halaman login...")
      }
    )
  }

  // For signing out
  onPressSignOut = async () => {
    auth().signOut()
      .then(() => {
        console.log("Sign Out Success")
        this.setState({isLogin: false})
      })
      .catch(err => {
        console.error("Error Sign Out", err)
      })
  }

  render() {
  const { isLogin } = this.state

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            (!isLogin) ? (
              <Stack.Screen
                name="LoginStack"
                children={props => <LoginStack {...props} setLogin={this.setLogin}/>}
                options={{
                  headerShown: false
                }}  
              />
            ) : (
              <Stack.Screen
                name="Home"
                children={props => (
                  <View>

                    <Text>
                      Masuk pak ekooooooooo
                    </Text>
                    
                    <TouchableOpacity onPress={this.onPressSignOut}>
                      <Text>
                        Sign Out
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            )
          }

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
 
export default App;