import React, { Component } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Login, LoginForm, RegisterForm } from "../../screen"

const Stack = createStackNavigator()

class LoginStack extends Component {
    render() { 
        return (
            <Stack.Navigator
                initialRouteName="Login"
                headerMode="screen"
            >
                <Stack.Screen
                    name="Login"
                    children={props => <Login {...props}/>}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LoginForm"
                    children={props => <LoginForm {...props} setLogin={this.props.setLogin}/>}
                    options={{
                        headerTitle:""
                    }}
                />
                <Stack.Screen
                    name="RegisterForm"
                    children={props => <RegisterForm {...props}/>}
                    options={{
                        headerTitle:""
                    }}
                />
            </Stack.Navigator>
        )
    }
}
 
export default LoginStack;