import { StyleSheet, Text, View, Image } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";
import LogIn from "./LogIn";

export default function SignUp() {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.position}>
          <Image source={require("../../assets/SeRA.png")} />
        </View>

        <View style={styles.distance}>
          <Text>Email Address</Text>
          <TextInput label="Email Address" />
        </View>

        <View style={styles.distance}>
          <Text>Password</Text>
          <TextInput label={"Password"} />
        </View>

        <View style={styles.distance}>
          <Text> ID Number</Text>
          <TextInput label={"ID Number"} />
        </View>

        <View style={styles.radio}>
          <RadioButton />
          <Text>
            {" "}
            I agree to the{" "}
            <Text style={{ fontWeight: "bold" }}>Terms & Conditions</Text>
          </Text>
        </View>

        <View style={styles.space}>
          <Button mode="contained">Sign Up</Button>
        </View>
        <View style={styles.connect}>
          <Text style={{ fontStyle: "italic" }}>Already have an account?</Text>
          <Button>Log In</Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  radio: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  position: {
    paddingTop: 25,
    alignContent: "center",
    alignItems: "center",
  },
  connect: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  distance: {
    margin: 10,
  },
  rounded: {},
});
