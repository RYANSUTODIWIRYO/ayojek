import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

class Login extends Component { 
    // Navigate to Login Form
    onPressLoginForm = () => {
        this.props.navigation.navigate("LoginForm")
    }

    // Navigate to Register Form
    onPressRegisterForm = () => {
        this.props.navigation.navigate("RegisterForm")
    }
    
    render() { 
        return (
            <View style={styles.screen}>
                <View style={styles.header}>                        
                    <Image source={images.logoGojek} style={styles.headerIcon}/>
                    <Text style={styles.headerText}>ayojek</Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Image style={styles.containerImage} source={images.backgroundLogin}/>
                    </View>
                    
                    <View>
                        <Text style={styles.containerTitleText}>
                            Selamat datang di AyoJek!
                        </Text>
                        <Text style={styles.containerText}>
                            Aplikasi yang bikin hidup kamu lebih nyaman. Siap bantuin semua kebutuhanmu, kapanpun, dan dimanapun
                        </Text>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.onPressLoginForm}>
                            <Text style={styles.buttonText}>Masuk</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={this.onPressRegisterForm}>
                            <Text style={styles.buttonText}>Daftar</Text>
                        </TouchableOpacity> 
                    </View>

                    <View>
                        <Text style={styles.containerText}>
                            Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi
                        </Text>
                    </View>               
                </View>
            </View>
        )
    }
}

const images = {
    logoGojek: require("../../asset/image/gojekLogo.png"),
    backgroundLogin: require("../../asset/image/backgroundLogin.png")
}

const styles = StyleSheet.create({
    screen: {flex:1, justifyContent: "space-between", padding: 15, backgroundColor:"white"},
    header: {flexDirection: "row"},
    headerText: {fontSize: 30, fontWeight: "bold"},
    headerIcon: {width:30, height:30, margin:10},

    container: {},
    containerHeader: {alignItems: "center", marginBottom: 20},
    containerImage: {width:"100%", height: 230},
    containerTitleText: {textAlign: "justify", fontSize: 20, fontWeight: "bold"},
    containerText: {textAlign: "justify"},
    buttonContainer: {flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 20},
    button: {width: 180, height: 35, backgroundColor: "#00aa13", borderRadius: 25, alignItems: "center", justifyContent: "center"},
    buttonText: {color: "white", fontWeight: "bold", fontSize: 15}
})
 
export default Login