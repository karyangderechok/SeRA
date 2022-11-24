import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

export default function TermsAndCondition() {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.position}>
          <View style={styles.height}>
            <Image source={require("../../assets/SeRA.png")} />
          </View>
        </View>
        <View>
          <Text style={{ textAlign: "center", fontStyle: "italic" }}>
            Amids the Covid-19 pandemic, the MSU-IIT Main Library provides this
            online seat reservation registration for students, researchers, and
            staff use the library under the pandemic protocols.
          </Text>
          <Text style={{paddingTop: 10, paddingBottom: 10 }}>
            Guidelines in Reserving/Using the Main Library facilities
          </Text>
          <Text>1. Register validated ID at the User Monitoring System</Text>
          <Text>2. Present Vaccination Crtificate</Text>
          <Text>3. Scan the QR code on the specific seat you reserved</Text>
          <Text>
            4. Transferring to one seat to another is sticktly prohibited unless
            requested and permitted
          </Text>
          <Text>
            5. Seat Reservation is available from Monday to Friday,
            8:00AM-5:00PM
          </Text>
          <Text>
            6. Stay at home if not feeling well and infrorm the cancel your
            reservation stating a valid reason
          </Text>
          <Text>
            7. On special cases or events, a written request address to the
            University Librarian is required
          </Text>
          <Text>
            8. Observe the health ans safety protocols inside the library
          </Text>
          <Text
            style={{ paddingTop: 10, paddingBottom: 10, fontStyle: "italic" }}
          >
            Note* ForAlumni - Alumni ID or Old Student ID
          </Text>
        </View>

        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Button mode="contained">Check Seats</Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignContent: "center",
    alignItems: "center",
  },
  textMargin: {
    padding: 10,
    margin: 5,
  },
  position: {
    paddingTop: 30,
    alignContent: "center",
    alignItems: "center",
    height: 250,
  },
});
