import { ReactText } from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

type TInstructionText = {
  children: ReactText;
  style: {[x:string] : any}
};

const InstructionText: React.FC<TInstructionText> = ({ children, style = {} }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
