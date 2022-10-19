import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView
} from "react-native";
import Heading from "../components/Heading";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen({ roundsNumber, userNumber, onGameOver }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageWidth = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
      <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Heading>Game Over</Heading>
      <View style={[styles.imageContainer, imageWidth]}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/success.png")}
        />
      </View>
      <Text style={styles.textContainer}>
        Your phone needed{" "}
        <Text style={styles.texthighlight}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.texthighlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameOver}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}
export default GameOverScreen;
// const deviceWidth=Dimensions.get('window').width;
const styles = StyleSheet.create({
    screen:{
        flex:1

    },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    // width:deviceWidth < 380 ? 150 : 300 ,
    // height:deviceWidth < 380 ? 150 : 300,
    // borderRadius:deviceWidth < 380 ? 75:150,
    borderWidth: 2,
    borderColor: "black",
    margin: 36,
    overflow: "hidden",
  },
//   imageStyle: {
//     width: "100%",
//     height: "100%",
//   },
  textContainer: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  texthighlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
