import React, { Component } from 'react'
import { LoginStack, HomeTopTab } from "./navigator"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
// import auth from '@react-native-firebase/auth';
// import { View, Text, TouchableOpacity } from 'react-native';
import { setLogout } from "./store/action"
import { connect } from 'react-redux'

const Stack = createStackNavigator()

class App extends Component {

  // Home = () => {
  //   console.log("Home is rendered")
  //   return (
  //     <View>
  //       <Text>
  //         Masuk pak ekooooooooo
  //       </Text>                    
  //       <TouchableOpacity onPress={this.props.doLogout}>
  //         <Text>
  //           Sign Out
  //         </Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            (this.props.isLogin) ? (
              <Stack.Screen
                name="HomeTopTab"
                component={HomeTopTab}
                options={{
                  headerShown: false
                }}
              />
            ) : (
              <Stack.Screen
                name="LoginStack"
                children={props =>{
                  return (
                      <LoginStack {...props}/>)
                  }
                }
                options={{
                  headerShown: false
                }}  
              />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
 
const mapStateToProps = (state) => ({
  isLogin: state.AuthReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)