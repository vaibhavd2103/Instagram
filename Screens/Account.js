import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Account = () => {
    return (
        <View style = {styles.container}>
            <Text>
                Account Screen
            </Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
