import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default function Chair() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Confimationdashboard")}
    >
      <Image
        style={{ margin: 10 }}
        source={require("../../assets/bangko.png")}
      />
    </TouchableOpacity>
  );
}
