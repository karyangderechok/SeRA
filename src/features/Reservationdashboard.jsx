import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Reservationdashboard() {
  return (
    <>
      <View style={{ alignItems: "center", paddingTop: 30 }}>
        <Image source={require("../../assets/SeRA.png")} />
      </View>

      {/* <View style={{ paddingLeft: 25 }}>
        <Text style={{ fontSize: 20 }}>Month</Text>
        <Text syle={{ fontSize: 25 }}>of</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>November</Text>
          <Button style={{marginLeft: 100}}>Date</Button>
        </View>
      </View> */}

      <View style={styles.container}>
        <Text style={{ fontStyle: "italic", paddingTop: 30, paddingBottom:10, fontSize:15}}>
          Click a seat to place your reservation request
        </Text>

        {/* function */}
        <View class="chairs" style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
          </View>
          <View style={styles.position}>
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
          </View>
          <View style={styles.position}>
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
          </View>
          <View style={styles.position}>
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
          </View>
          <View style={styles.position}>
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
          </View>
          <View style={styles.position}>
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
            <Image
              style={{ margin: 10 }}
              source={require("./../../assets/bangko.png")}
            />
          </View>
        </View>

        <View class="radioButton" style={{ flexDirection: "row", padding: 20 }}>
          <View style={styles.connect}>
            <RadioButton />
            <Text>1</Text>
          </View>
          <View style={styles.connect}>
            <RadioButton />
            <Text>2</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
  },
  radio: {
    flexDirection: "row",
  },
  connect: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
