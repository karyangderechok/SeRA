import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton, MD3Colors, RadioButton } from "react-native-paper";
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";
import Chair from "../components/chair";

export default function Reservationdashboard2() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
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
        <Text
          style={{
            fontStyle: "italic",
            paddingTop: 30,
            paddingBottom: 10,
            fontSize: 15,
          }}
        >
          Click a seat to place your reservation request
        </Text>

        {/* function */}
        <View class="chairs" style={{ flexDirection: "row" }}>
          <View style= {{flexDirection: "column"}}>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
          </View>
          <View> 
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
          </View>
          <View> 
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            
          </View>
          <View> 
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
          </View>
          <View> 
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>  
          </View>
          </View>

        <View class="radioButton" style={{ flexDirection: "row", padding: 20 }}>
          <View style={styles.connect}>
            <RadioButton
              value="first"
            //   status={ checked === 'first' ? 'checked' : 'unchecked' }
            //   onPress={() => setChecked('first')}
              onPress={() => navigation.navigate('Reservationdashboard')}></RadioButton>
            <Text>1</Text>
          </View>
          <View style={styles.connect}>
            <RadioButton 
            value="second"
            status={ "checked" }
            onPress={() => setChecked('second')}
            />
            <Text >2</Text>
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
