import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

interface IStartGameScreen {
  onPickNumber: (enteredNumber: number) => void;
}

const StartGameScreen: React.FC<IStartGameScreen> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // show alert...
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 0 ~ 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onPickNumber(choosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText style={{}}>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View style={styles.inputContainer}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    // backgroundColor: 'white',
    borderRadius: 8,
    // shadow for android
    elevation: 8,
    // shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2},
    // shadowRadius: 10,
    // elevation: 8,
    // backgroundColor: 'white'
    //
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
