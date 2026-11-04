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
import { useInfiniteEvents } from "../hooks/useEvents";

const EventListScreen = () => {
  // const { data, error, isError, isFetching, dataUpdatedAt } = useQuery({
  //   queryKey: ["getEvents"],
  //   queryFn: getEvents,
  //   initialData: {
  //     _embedded: {
  //       events: [],
  //     },
  //   },
  //   // staleTime: 5000,
  //   // refetchInterval: 5000,
  // });

  const {
    data,
    error,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteEvents();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>{error !== null ? error.message : "Fout"}</Text>;
  }

  const events = data?.pages.flatMap((page) => page._embedded.events) ?? [];

  return (
    <View style={styles.container}>
      {/* <Text>{new Date(dataUpdatedAt).toLocaleTimeString()}</Text> */}
      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        ListFooterComponent={() =>
          isFetchingNextPage && <ActivityIndicator size="large" />
        }
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
