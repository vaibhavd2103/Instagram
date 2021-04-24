import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chats = (props) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color:"white",}}>
                This is Chat screen
            </Text>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
    }

})
