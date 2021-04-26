import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./AppNavigator/AppNavigator";
import * as firebase from "firebase";
import firebaseConfig from "./Config";
import Home from "./Screens/Home";
import Initial from "./Screens/Initial";

export default function App() {
  return <AppNavigator />;
}
