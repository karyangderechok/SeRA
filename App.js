import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar, SafeAreaView, Text } from "react-native";
import TermsAndCondition from "./src/features/TermsAndCondition";
import SignUp from "./src/features/SignUp";
import LogIn from "./src/features/LogIn";
import Reservationdashboard from "./src/features/Reservationdashboard";
import Reservationdashboard2 from "./src/features/Reservationdasboard2";
import Confirmationdashboard from "./src/features/Confirmationdashboard";
import ReservationDetails from "./src/features/ReservationDetails";
import SeatReserved from "./src/features/SeatReserved";
import Scanner from "./src/features/Scanner";
import DetailConfirmation from "./src/features/DetailConfirmation";
import QRcode from "./src/features/QRcode";
import Last from "./src/features/Last";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ConfirmationdashboardScreen = () => <Confirmationdashboard/>
const SignUpScreen = () => <SignUp/>
const LogInScreen = () => <LogIn/>
const DetailConfirmationScreen = () => <DetailConfirmation/>
const ReservationdashboardScreen = () => <Reservationdashboard/>
const Reservationdasboard2Screen = () => <Reservationdashboard2/>
const SeatReservedScreen = () => <SeatReserved/>
const ScannerScreen = () => <Scanner/>
const QRcodeScreen = () => <QRcode/>
const LastScreen= () => <Last/>
const TermsAndConditionScreen = () => <TermsAndCondition/>
const ReservationDetailsScreen = () => <ReservationDetails/>
function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= "LogIn" component={LogInScreen}/>
        <Stack.Screen name= "SignUp" component={SignUpScreen}/>
        <Stack.Screen name= "TermsAndCondition" component={TermsAndConditionScreen}/>
        <Stack.Screen name= "Reservationdashboard" component={ReservationdashboardScreen}/>
        <Stack.Screen name= "Reservationdashboard2" component={Reservationdasboard2Screen}/>
        <Stack.Screen name= "Confimationdashboard" component={ConfirmationdashboardScreen}/>
        <Stack.Screen name= "ReservationDetails" component={ReservationDetailsScreen}/>
        <Stack.Screen name= "SeatReserved" component={SeatReservedScreen}/>
        <Stack.Screen name= "QRcode" component={QRcodeScreen}/>
        <Stack.Screen name= "Scanner" component={ScannerScreen}/>
        <Stack.Screen name= "DetailConfirmation" component={DetailConfirmationScreen}/>
        <Stack.Screen name= "Last" component={LastScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    alignContent: "center",
    // alignItems: "center",
  },
});
