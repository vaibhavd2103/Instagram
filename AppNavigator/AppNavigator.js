import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import Initial from "../Screens/Initial";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {} from "react-native-vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Chats from "../Screens/Chats";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Account from "../Screens/Account";
import NewPost from "../Screens/Likes";
import Likes from "../Screens/Likes";

const Stack = createStackNavigator();

export class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Initial"
            component={Initial}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      activeColor="#D44275"
      inactiveColor="white"
      barStyle={{ backgroundColor: "black" }}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: "black",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: "Chats",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Likes}
        options={{
          tabBarLabel: "Likes",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
