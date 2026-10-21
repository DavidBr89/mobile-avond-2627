import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { getEvents } from "../api/events";

import { useQuery } from "@tanstack/react-query";
import EventCard from "../components/EventCard";

const EventListScreen = () => {
  const { data, error, isError, isFetching, dataUpdatedAt } = useQuery({
    queryKey: ["getEvents"],
    queryFn: getEvents,
    initialData: {
      _embedded: {
        events: [],
      },
    },
    staleTime: 5000,
    // refetchInterval: 5000,
  });

  if (isFetching) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View className="bg-amber-400" style={styles.container}>
      {/* <Text>{new Date(dataUpdatedAt).toLocaleTimeString()}</Text> */}
      <FlatList
        data={data._embedded.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
