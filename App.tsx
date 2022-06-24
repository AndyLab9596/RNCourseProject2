import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ImageBackground as DefaultImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

type ImageBackgroundProps = DefaultImageBackground["props"] & {
  children: React.ReactNode;
};

function MyBackground(props: ImageBackgroundProps) {
  return <DefaultImageBackground {...props} />;
}

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const pickNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <MyBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </MyBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
