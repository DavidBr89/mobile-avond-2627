import EventListScreen from "@/features/events/screens/EventListScreen";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return <EventListScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
