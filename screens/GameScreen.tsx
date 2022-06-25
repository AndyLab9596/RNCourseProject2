import { Alert, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

interface IGameScreen {
  userNumber: number;
  onGameOver: (guessRounds: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<IGameScreen> = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );
  const [guessRounds, setGuessRounds] = useState([generateRandomBetween(minBoundary, maxBoundary, userNumber)]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  };

  const guessRoundsListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />

            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />

            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />} keyExtractor={(item) => item.toString()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Platform.OS === "android" ? 32 : 24,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});

export default GameScreen;
