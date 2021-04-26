import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from "react-native";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import Login from "./Login";
import { auth } from "../Config";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        {
          props.navigation.navigate("Home");
        }
      } else {
        setUser(null);
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <ImageBackground
                source={{
                  uri:
                    "https://i.pinimg.com/originals/71/6d/a1/716da13200bb37ccf777d541f7d08002.png",
                }}
                style={styles.bg}
              >
                <Image
                  source={require("../assets/welcome1.png")}
                  style={{
                    height: 100,
                    width: "100%",
                    borderRadius: 44,
                    marginBottom: 50,
                  }}
                />
                <TextInput
                  style={styles.inputemail}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                  style={styles.inputpass}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                  style={styles.register}
                  onPress={userSignup}
                  type="submit"
                >
                  <Text
                    style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <View style={styles.login}>
                  <Text style={styles.accnt}>Already have an account?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate(Login);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        marginLeft: 5,
                        fontWeight: "bold",
                        color: "#1C7086",
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        );
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  const userSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        Alert.alert("Successfully Registerd !");
        {
          props.navigation.navigate("Home");
        }
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  /*return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://i.pinimg.com/originals/71/6d/a1/716da13200bb37ccf777d541f7d08002.png",
          }}
          style={styles.bg}
        >
          <Image
            source={require("../assets/welcome1.png")}
            style={{
              height: 100,
              width: "100%",
              borderRadius: 44,
              marginBottom: 50,
            }}
          />
          <TextInput
            style={styles.inputemail}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputpass}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.register}
            onPress={userSignup}
            type="submit"
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={styles.login}>
            <Text style={styles.accnt}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(Login);
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  marginLeft: 5,
                  fontWeight: "bold",
                  color: "#1C7086",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );*/
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Loading......</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  login: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 140,
  },
  accnt: {
    fontSize: 17,
    color: "white",
  },
  input: {
    width: "90%",
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#0F4059",
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
  },
  register: {
    alignItems: "center",
    backgroundColor: "#0F4059",
    height: 50,
    justifyContent: "center",
    borderRadius: 20,
    width: 150,
    marginTop: 10,
  },
  inputemail: {
    width: "90%",
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#0F4059",
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
  },
  inputpass: {
    width: "90%",
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#0F4059",
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
  },
});

export default SignUp;
