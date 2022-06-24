import { ReactNode } from "react";
import { Text, View, StyleSheet, ViewProps } from "react-native";
import Colors from "../../constants/colors";

interface ICard {
  children: ViewProps["children"];
}

const Card: React.FC<ICard> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
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
  },
});

export default Card;
