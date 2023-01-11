import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function SeatReserved() {
  const navigation= useNavigation()
  return (
    <>
      <View style={{ alignItems: "center", paddingTop: 50, paddingBottom: 25 }}>
        <Image source={require("../../assets/SeRA.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            paddingTop: 20,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Seat Reserved!
        </Text>
      </View>
      <Card mode="elevated">
        <View
          style={{
            backgroundColor: "lightgray",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            margin: 20,
          }}
        >
          <Card.Content>
            <Text style={{ fontSize: 20, paddingLeft: 5, paddingRight: 5 }}>
              Date:
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 5, paddingRight: 5 }}>
              Time:
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 5, paddingRight: 5 }}>
              Student ID Number:
            </Text>
          </Card.Content>
        </View>
      </Card>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontStyle: "italic",
            textAlign: "center",
            paddingTop: 30,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
        >
          *Please bring your Vaccination certificate and present upon entering
          the facility.
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontStyle: "italic",
            textAlign: "center",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
        >
          ** After your reserved time, please exit the facility immediately.
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontStyle: "italic",
            textAlign: "center",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
        >
          *** Use the SeRA Scanner to scan the QR code of the seat you reserved.
        </Text>
      </View>
      <View style={{ paddingTop: 40, paddingLeft: 80, paddingRight: 80 }}>
        <Button mode="contained" onPress={() => navigation.navigate('QRcode')}> QR Scanner </Button>
      </View>
    </>
  );
}
