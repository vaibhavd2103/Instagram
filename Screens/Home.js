import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        <View style = {styles.container}>
            <StatusBar style = 'dark' />
            <View style = {styles.header}>
                <Image 
                source={ require('../assets/insta.png') }
                style={styles.insta}
                />
            </View>
            <Text>
                This is HomeScreen
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        backgroundColor:"#f6f5f5"
    },
    insta:{
        width:100,
        height:30,
    },
    header:{
        backgroundColor:"white",
        padding:10,
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
})
