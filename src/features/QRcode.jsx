import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function QRcode() {
  const navigation= useNavigation()
  return (
    <>
      <View style={{ alignItems: "center", paddingTop: 50, paddingBottom: 25 }}>
        <Image source={require("../../assets/SeRA.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            textAlign: "center",
            paddingTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Please look at the number on the seat and choose the seat you reserved.
        </Text>
          <View style={{ padding: 20 }}>
          <Button mode="contained" onPress={() => navigation.navigate('Scanner')}>Scan</Button>
        </View>
      </View>
    </>
  );
}
