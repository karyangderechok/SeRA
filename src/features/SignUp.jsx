import { Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
// import LogIn from "./LogIn";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
// import LogIn from "./LogIn";

const navigation = createNativeStackNavigator()

export default function SignUp() {
  const navigation= useNavigation()
  return (
    <>
        <View style={{ alignItems: "center", paddingTop: 50, paddingBottom: 25 }}>
          <Image source={require("../../assets/SeRA.png")} />
        </View>

        <View className='px-20'>
          <Text style={{marginBottom: 5}}>Email Address</Text>
          <TextInput label="Email Address" />
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{marginBottom: 5}}>Password</Text>
          <TextInput label={"Password"} />
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{marginBottom: 5}}> ID Number</Text>
          <TextInput label={"ID Number"} />
        </View>
        <View style={{padding: 10}}>
          <Button mode="contained" onPress={() => navigation.navigate('Reservationdashboard')}>Sign Up</Button>
        </View>
        <View style={{padding: 10}}>
          <Text style={{ fontStyle: "italic" }}>Already have an account?</Text>
          <Button>Log In</Button>
        </View>
    </>
  );
}