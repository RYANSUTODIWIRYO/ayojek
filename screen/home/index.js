import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from "react-redux"
import { setLogout } from "../../store/action"

class Home extends Component {
    render() { 
        return (
            <View>
                <Text>Ini Home</Text>
                <TouchableOpacity 
                    onPress={this.props.doLogout}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(setLogout())
  })
  
export default connect(null, mapDispatchToProps)(Home)