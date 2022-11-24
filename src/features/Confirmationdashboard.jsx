import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-paper";

export default function Confirmationdashboard() {
  return (
    <>
      <View style={{ alignItems: "center", paddingTop: 50, paddingBottom: 25 }}>
        <Image source={require("../../assets/SeRA.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            paddingTop: 25,
            paddingButtom: 25,
            paddingLeft: 25,
          }}
        >
          Seat 1
        </Text>
      </View>
      <View
        style={{
          paddingTop: 10,
          paddingLeft: 50,
          paddingRight: 50,
          paddingButtom: 10,
        }}
      >
        <Calendar />
      </View>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 13, fontStyle: "italic" }}>
          *Please select the specific time you want to occupy the seat
        </Text>
      </View>
      <View style={{ padding: 25, flexDirection: 'row'}}>
        <Text>Time Start</Text>
        <Text style={{marginLeft:160}}>Time End</Text>
      </View>
      <View style={{paddingLeft: 120, paddingRight:120}}>
        <Button mode='contained' style={{backgroundColor: 'maroon'}}>RESERVE SEAT</Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
 
});
