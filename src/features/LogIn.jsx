import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LogIn() {
  const navigation = useNavigation()
  return (
    <>
      <View>
        <View style={styles.position}>
          <Image source={require("../../assets/SeRA.png")} />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
          <Text>Email Address</Text>
          <TextInput label="Email Address" />
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
          <Text>Password</Text>
          <TextInput label="Password" />
        </View>

        <View style={{ padding: 20 }}>
          <Button mode="contained" onPress={() => navigation.navigate('TermsAndCondition')}>Log in</Button>
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
});
