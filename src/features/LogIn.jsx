import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/icon.png')}/>
        <View>
          <Text>Email Address</Text>
          <TextInput label="Email Address" />
        </View>

        <View>
          <Text>Password</Text>
          <TextInput label={"Password"} />
        </View>

        <View>
          <Button mode="contained">Log In</Button>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "white",
  },
});
