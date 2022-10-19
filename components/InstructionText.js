import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    fontSize: 24,
    // fontWeight: "bold",
    color: Colors.accent500,
  },
});
