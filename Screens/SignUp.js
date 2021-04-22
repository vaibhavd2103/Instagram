import React, { Component, useState } from 'react'
import { Text, 
    View, 
    StyleSheet, 
    Keyboard, 
    TextInput, 
    Alert, 
    TouchableWithoutFeedback,
    ImageBackground
    } from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from './Login'

const SignUp = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const userSignup = () => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then(()=>{
            Alert.alert("Successfully Registerd !")
            {props.navigation.navigate("Home")}
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style = {styles.container}>
            <ImageBackground source ={require('../assets/bg.png')}
            style = {styles.bg}>
            <TextInput style = {styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput style = {styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style = {{height:30}}></View>
            <TouchableOpacity style = {styles.register}
            onPress={userSignup}>
                <Text style = {{color:"white", fontSize:25, fontWeight:"bold"}}>
                    Register
                </Text>
            </TouchableOpacity>
            <View style = {styles.login}>
                <Text style = {styles.accnt}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={()=>{props.navigation.navigate(Login)}}>
                    <Text style = {{fontSize:20, marginLeft:5, fontWeight:"bold", color:"white"}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"black"
    },
    bg:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },

    login:{
        flexDirection:"row" , 
        alignItems:"center", 
        justifyContent:"center",
        marginTop:20

    },
    accnt:{
        fontSize:17,
        color:"white"
    },
    input:{
        width:'90%',
        marginBottom:10,
        backgroundColor:"white",
        borderWidth:3,
        borderColor:"black",
        paddingLeft:10,
        borderRadius:10,
        height:40,
    },
    register:{
        alignItems:"center",
        backgroundColor:"black",
        height:50,
        justifyContent:"center",
        borderRadius:20,
        width:150,
        marginTop:150
    }

})

export default SignUp;