import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'

const Post = ({ username, caption, uri }) => {
    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:"row",alignItems:'center', padding:5}}>
                <Avatar.Image
                    source = {require('../assets/bg.png')}
                    size={50}
                />
                <View>
                    <Text style = {{fontWeight:"bold", marginLeft:5, fontSize:15, color:'white'}}>
                        {username}
                    </Text>
                    <Text style = {{marginLeft:5, fontSize:13, color:'white'}}>
                        Location: Pune, Maharashtra
                    </Text>
                </View>
            </View>
            <View style = {{width:'100%', height:300,borderTopWidth:2,borderBottomWidth:2,borderColor:'#191919'}}>
            <Image
            resizeMode = 'cover'
            source = {{uri}}
            style = {styles.postimage}
            />
            </View>
            <View style = {{padding:5}}>
            <Text style = {{color:'white'}}>
                {username}: {caption}
            </Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:40,
        backgroundColor:"black"
    },
    postimage:{
        height:'100%',
        width:'100%',
    }
})
