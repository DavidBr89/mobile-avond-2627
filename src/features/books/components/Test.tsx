import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "@/shared/components/MyText";

const Test = () => {
  return (
    <View style={styles.container}>
      <MyText style={{ color: "green" }}>Test</MyText>
      <MyText>Xtra</MyText>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "blue",
  },
  txt: {
    color: "white",
  },
});
