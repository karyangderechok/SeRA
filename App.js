import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import TermsAndCondition from "./src/features/TermsAndCondition";
import SignUp from "./src/features/SignUp";
import LogIn from "./src/features/LogIn";
import Reservationdashboard from "./src/features/Reservationdashboard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SignUp /> */}
      {/* <TermsAndCondition /> */}
      {/* <LogIn /> */}
      <Reservationdashboard/>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    alignContent: "center",
    // padding: 20,
    // alignItems: "center",
  },
});
