import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
function PrimaryButton({ children,onPress }) {
//   function pressHandler() {
//     console.log("pressed!");
//   }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{ color: Colors.primary600  }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 8,
    borderRadius: 28,
    overflow:'hidden'
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
