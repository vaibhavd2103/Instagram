import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import * as firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import SignUp from "./SignUp";
import Home from "./Home";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const userSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        {
          props.navigation.replace("Home");
        }
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground
          source={{
            uri:
              "https://www.itl.cat/pngfile/big/9-94126_minimalist-wallpaper-hd-portrait.jpg",
          }}
          style={styles.bg}
        >
          <Image
            source={require("../assets/welcomeback.png")}
            style={styles.welcomeback}
          />
          <View style={{ alignItems: "center", width: "100%" }}>
            <TextInput
              placeholder="Email"
              style={styles.inemail}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              style={styles.inpass}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <TouchableOpacity style={styles.button} onPress={userSignin}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
              <View style={styles.logint}>
                <Text style={styles.accnt}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate(Home);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 5,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  bg: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inemail: {
    width: "90%",
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
    marginTop: 0,
  },

  inpass: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
    marginBottom: 220,
  },

  login: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#AF1D1E",
  },

  button: {
    marginTop: 10,
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    width: 200,
    borderRadius: 20,
    opacity: 1,
  },

  logint: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 80,
  },

  accnt: {
    fontSize: 17,
    color: "white",
  },
  welcomeback: {
    height: 100,
    width: "60%",
    marginBottom: 130,
  },
});
export default Login;
