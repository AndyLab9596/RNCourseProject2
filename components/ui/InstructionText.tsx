import { ReactText } from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

type TInstructionText = {
  children: ReactText;
};

const InstructionText: React.FC<TInstructionText> = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
