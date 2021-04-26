import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";
import SignUp from "./SignUp";

const Account = (props) => {
  const [user, setUser] = useState(null);
  const userthere = () => {
    if ((user = authUser)) {
      console.log("user is there");
    } else {
      console.log("user not there");
    }
    return userthere;
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Account Screen</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
