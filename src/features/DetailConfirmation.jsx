import React from "react";
import { View, Text, Image } from "react-native";
import { Card, Checkbox } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

export default function DetailConfirmation() {
  const navigation= useNavigation()
  return (
    <>
      <View style={{ alignItems: "center", paddingTop: 50, paddingBottom: 25 }}>
        <Image source={require("../../assets/SeRA.png")} />
      </View>
      <View>
        <Text style={{ fontSize: 25, paddingTop: 20, paddingLeft: 30 }}>
          Seat 1
        </Text>
      </View>
      <Card>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingTop: 20,
            paddingBottom: 40,
            paddingLeft: 10,
            margin: 20,
          }}
        >
          <Card.Content>
            <Text style={{ fontSize: 25, paddingBottom: 10 }}>
              Reservation Details
            </Text>
            <Text style={{ fontSize: 20 }}> Date: </Text>
            <Text style={{ fontSize: 20 }}> Time: </Text>
            <Text style={{ fontSize: 20 }}> Student ID Number: </Text>
          </Card.Content>
        </View>
      </Card>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontStyle: "italic",
            paddingTop: 30,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          Is this your details?
        </Text>
      </View>
      <View
        style={{ alignItems: "center", flexDirection: "row", paddingLeft: 100 }}
      >
        <Checkbox.Item label="Yes" onPress={() => navigation.navigate('Last')}></Checkbox.Item>
        <Checkbox.Item label="No" onPress={() => navigation.navigate('QRcode')}></Checkbox.Item>
      </View>
    </>
  );
}
