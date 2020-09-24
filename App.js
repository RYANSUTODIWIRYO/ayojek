import React, { Component } from 'react'
import { LoginStack } from "./navigator"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

class App extends Component {
  render() { 
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginStack"
            children={props => <LoginStack {...props}/>}
            options={{
              headerShown: false
            }}  
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
 
export default App;