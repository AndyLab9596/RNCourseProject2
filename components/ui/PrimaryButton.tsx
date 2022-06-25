import { Component, JSXElementConstructor, ReactNode, ReactText } from "react";
import { Text, View, Pressable, StyleSheet, TextProps } from "react-native";
import Colors from "../../constants/colors";
import { Ionicons } from '@expo/vector-icons';

interface IPrimaryButton {
  children: TextProps['children'];
  onPress: () => void;
}

// type TIonicIcons = React.Component<keyof typeof Ionicons.glyphMap>

type ITextProps = Text['props'] & {
  children: ReactNode | ReactText,
  style: { [x: string]: any }
}

const ExtendsText = (props: ITextProps) => {
  return <Text style={props.style} >{props.children}</Text>
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <ExtendsText style={styles.buttonText}>{children}</ExtendsText>
        {/* <Text style={styles.buttonText}>{children}</Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 2,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,

    // android shadow
    elevation: 2,

    // ios shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
