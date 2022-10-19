import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
ScrollView
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import react from "react";
import { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import Heading from "../components/Heading";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const {width, height} = useWindowDimensions();
  function textInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a Number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickedNumber(chooseNumber);
  }
  const deviceTopHeight = height < 380 ? 33 : 100;
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior='position'>
    <View style={[styles.container,{marginTop:deviceTopHeight}]}>
      <Heading>Guess My Number</Heading>

      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.inputContainer}
          maxLength={2}
          keyboardType="decimal-pad"
          value={enteredNumber}
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  screen:{
    flex:1

  },
  container: {
  
    // marginTop: 100,
    alignItems: "center",
  },

  inputContainer: {
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    fontSize: 25,
    alignItems: "center",
    marginVertical: 5,
    color: Colors.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
