import { StyleSheet, Text, View, TextProps, Platform } from "react-native";
import React from "react";

const MyText = (props: TextProps) => {
  // console.log(Platform.);

  return (
    <Text style={{ ...styles.txt, ...props.style }} {...props}>
      {props.children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  txt: {
    // color: "white",
    // fontFamily: "ScienceGothic",
    // fontWeight: "600",
    ...Platform.select({
      ios: {
        fontFamily: "Bebas",
      },
      android: {
        fontFamily: "ScienceGothic",
      },
    }),
  },
});
