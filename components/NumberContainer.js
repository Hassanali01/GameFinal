import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}
export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    // fontWeight: "bold",
    color: Colors.accent500,
  },
});
