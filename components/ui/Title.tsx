import { ReactText } from "react";
import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

interface ITitle {
  children: ReactText;
}

const Title: React.FC<ITitle> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Platform.OS === "android" ? 32 : 24,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

export default Title;
