import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";

export default function Scanner() {
    return (
        <>
        <View style={{ alignItems:"center", paddingTop: 50, paddingBottom: 25}}>
            <Image source={require("../../assets/SeRA.png")} />
        </View>
        <View>
            <Text style={{ fontSize: 25, padding: 20, textAlign: "center" }}> SeRA QR code Scanner </Text>
        </View>
        </>
    );
}