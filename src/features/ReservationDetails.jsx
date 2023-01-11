import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
// import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";

export default function ReservationDetails({ date, time, occupant }) {
  const Textdate = date;
  const Texttime = time;
  const Textoccupant = occupant;
  const navigation= useNavigation()
  return (
    <>
      <View style={{ alignItems: "center", paddingTop: 40, paddingBottom: 25 }}>
        <Image source={require("../../assets/SeRA.png")}  />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            paddingTop: 20,
            paddingButtom: 25,
            paddingLeft: 25,
          }}
        >
          Seat 1
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            paddingTop: 20,
            paddingButtom: 25,
            paddingLeft: 60,
          }}
        >
          Reservation Details
        </Text>
      </View>
      <Card mode="elevated">
        <View
          style={{
            backgroundColor: "lightgray",
            paddingTop: 40,
            paddingBottom: 40,
            paddingLeft: 10,
            margin: 20,
          }}
        >
          <Card.Content>
            <Paragraph>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Date: <Text>{Textdate}</Text>
              </Text>
            </Paragraph>
            <Paragraph>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Time: <Text>{Texttime}</Text>
              </Text>
            </Paragraph>
            <Paragraph>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Occupant: <Text>{Textoccupant}</Text>
              </Text>
            </Paragraph>
          </Card.Content>
        </View>
      </Card>

      <View style={{ padding: 100 }}>
        <Button mode="contained" onPress={() => navigation.navigate('SeatReserved')}> Confirm </Button>
      </View>
    </>
  );
}
