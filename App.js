import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import TermsAndCondition from "./src/features/TermsAndCondition";
import SignUp from "./src/features/SignUp";

export default function App() {
  return (
    <SafeAreaView>
      <SignUp />
      {/* <TermsAndCondition /> */}
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
    alignItems: "center",
  },
});
