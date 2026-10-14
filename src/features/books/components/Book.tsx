import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MyText from "@/shared/components/MyText";

const arr = [
  { id: 1, fName: "David" },
  { id: 2, fName: "John" },
];

const Book = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Book</Text>
      {/* Standaard van het platform */}
      <Button
        onPress={() => {
          console.log("Op de knop gedrukt");
        }}
        title="Verstuur"></Button>

      <Pressable
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : { opacity: 1 })}
        onPress={() => {
          console.log("Op de Pressable gedrukt");
        }}
        onLongPress={() => {
          console.log("Lang gedrukt op de Pressable");
        }}>
        <View style={styles.btn}>
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            Verstuur (Pressable)
          </Text>
        </View>
      </Pressable>

      <TouchableOpacity
        onPress={() => {
          console.log("Op de TouchableOpacity gedrukt");
        }}>
        <View style={styles.btn}>
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            Verstuur (Touchable Opacity)
          </Text>
        </View>
      </TouchableOpacity>

      {arr.map((v) => (
        <MyText key={v.id}>{v.fName}</MyText>
      ))}
    </ScrollView>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 2,
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "yellow",
    borderRadius: 8,
    margin: 8,
  },
});
