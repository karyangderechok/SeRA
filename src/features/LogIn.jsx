import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LogIn() {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.height}>
          <View style={styles.position}>
            <Image source={require("../../assets/SeRA.png")} />
          </View>
        </View>

        <View style={styles.padding}>
          <Text>Email Address</Text>
          <TextInput label="Email Address" />
        </View>

        <View style={styles.padding}>
          <Text>Password</Text>
          <TextInput label="Password" />
        </View>

        <View  style={{paddingLeft: 150, paddingRight: 150}}>
          <Button mode="contained">Log in</Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  position: {
    paddingTop: 100,
    alignContent: "center",
    alignItems: "center",
    height: 300,
  },
  padding: {
    padding: 20,
    paddingTop: 5,
  }
});
