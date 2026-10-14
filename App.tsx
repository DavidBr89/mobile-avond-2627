import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Book from "@/features/books/components/Book";
import Test from "@/features/books/components/Test";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import EventListScreen from "@/features/events/screens/EventListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Book /> */}
      {/* <Test /> */}
      <EventListScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
