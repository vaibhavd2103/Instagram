import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Likes = () => {
    return (
        <View style = {styles.container}>
            <Text style = {{color:"white"}}>
                Likes Screen
            </Text>
        </View>
    )
}

export default Likes

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
    }
})

