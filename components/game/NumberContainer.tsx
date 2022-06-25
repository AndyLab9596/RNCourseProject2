import { ReactText } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface INumberContainer {
  children: ReactText;
}

const NumberContainer: React.FC<INumberContainer> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: 'open-sans-bold'
  },
});

export default NumberContainer;
