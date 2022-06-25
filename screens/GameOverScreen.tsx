import { Image, StyleSheet, View, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

interface IGameOverScreen {
  roundsNumber: number,
  userNumber: number,
  onStartNewGame: () => void;
}

const GameOverScreen: React.FC<IGameOverScreen> = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText} >
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds t guess the number{' '}<Text style={styles.hightlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  )
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 8
  },
  hightlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})

export default GameOverScreen;
