import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

function Card({ children }) {
  return <View style={styles.MainContainer}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary500,
    marginHorizontal: 15,
    borderRadius: 8,
    // shodow for android device
    elevation: 4,
    // shadow for ios device
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
});
