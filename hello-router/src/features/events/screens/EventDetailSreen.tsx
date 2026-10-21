import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEventById } from "../hooks/useEvents";

const EventDetailSreen = () => {
  const { id } = useLocalSearchParams();
  const { event, isLoading, isError } = useEventById(id);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    Alert.alert("Er is iets fout gegaan", "Kon het event niet vinden");
  }

  return <View>{event !== undefined && <Text>{event.name}</Text>}</View>;
};

export default EventDetailSreen;

const styles = StyleSheet.create({});
