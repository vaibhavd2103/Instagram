import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Post from './Post'
import { db } from '../Config'


const Home = () => {
    const [posts, setPosts] = useState([
        
    ]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map( doc => doc.data()));
        })

    }, []);
    return (
        <View style = {styles.container}>
            <StatusBar style = 'light' />
            <View style = {styles.header}>
                <Image 
                source={{uri:'https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png'}}
                style={styles.insta}
                />
            </View>
            <ScrollView>
            {
                posts.map(post => (
                    <Post username={post.username} caption={post.caption} uri={post.uri} />
                ))
            }
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        backgroundColor:"black"
    },
    insta:{
        width:120,
        height:35,
    },
    header:{
        backgroundColor:"black",
        padding:10,
        paddingLeft:10,
        borderBottomWidth:2,
        borderColor:'#191919',
        justifyContent:'center',
        height:60,
        width:'100%',
        alignItems:'center',
    },
})
