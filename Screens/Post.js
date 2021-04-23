import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'

function Post() {
    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:"row",alignItems:'center', padding:5}}>
                <Avatar.Image
                    source = {require('../assets/bg.png')}
                    size={50}
                />
                <View>
                    <Text style = {{fontWeight:"bold", marginLeft:5, fontSize:15}}>
                        Username
                    </Text>
                    <Text style = {{marginLeft:5, fontSize:13}}>
                        Location: Pune, Maharashtra
                    </Text>
                </View>
            </View>
            <Image
            resizeMode = 'cover'
            source = {require('../assets/image1.png')}
            style = {styles.postimage}
            />
            <Text>
                Username + Caption
            </Text>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    postimage:{
        height:'40%',
        width:'100%',
        
    }
})
