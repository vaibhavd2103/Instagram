import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Initial(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={require("../assets/bg.png")} style={styles.bg}>
        <View style={styles.buttonContainer}>
          <View style={styles.login}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 50,
  },

  login: {
    backgroundColor: "white",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  signup: {
    backgroundColor: "white",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
