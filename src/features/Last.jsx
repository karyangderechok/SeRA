import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Last(){
    const navigation= useNavigation()
    return (
        <>
        <View style={{ alignItems: "center", paddingTop: 50, paddingBottom: 25 }}>
            <Image source={require("../../assets/SeRA.png")} />
        </View>
        <View>
            <Text style={{ fontSize: 25, fontStyle:"italic", textAlign: "center", color: 'maroon'}}> Seat Found! </Text>
        </View>
        <View>
            <Text style={{ fontSize: 25, textAlign: "center", paddingTop: 100}}>
              Great! Enjoy your stay.  
            </Text>
        </View>
        <View>
            <Text style={{ fontSize: 15, textAlign: "center", paddingTop: 100}}> *After the scheduled time, please click the Done button, before you exit the facility. </Text>
        </View>
        <View>
            <View style={{padding: 50, alignItems:"center"}}>
                <Button mode="contained" onPress={() => navigation.navigate('LogIn')}> DONE </Button>
            </View>
        </View>
        </>
    );
}