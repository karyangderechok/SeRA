import React from "react";
import { View, Text, Image } from "react-native";

export default function QRcode() {
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
      </View>
    </>
  );
}
