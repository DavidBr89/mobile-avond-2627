import { StyleSheet, Text, View, TextProps } from "react-native";
import React from "react";

const MyText = (props: TextProps) => {
  return (
    <Text style={{ ...styles.txt, ...props.style }} {...props}>
      {props.children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  txt: {
    color: "white",
    fontWeight: "600",
  },
});
