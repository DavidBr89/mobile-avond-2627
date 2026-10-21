import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import Axios from "axios";
import { getEvents } from "../api/events";
import { TMEvent } from "../types";
import { useQuery } from "@tanstack/react-query";

const EventListScreen = () => {
  // Data ophalen vanuit de API
  // const [events, setEvents] = useState<TMEvent[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // //   const [person, setPerson] = useState({ fName: "John", lName: "Doe" });

  // useEffect(() => {
  //   // const timerId = setInterval(() => {
  //   //   console.log("test");
  //   // }, 1000);

  //   // const data = await getEvents();

  //   // Cleanup functie
  //   // return () => clearInterval(timerId);

  //   (async () => {
  //     try {
  //       const response = await getEvents();
  //       setEvents(response.data._embedded.events);
  //     } catch (error) {
  //       Alert.alert(
  //         "Er is iets fout gegaan!",
  //         "Events konden niet opgehaald worden",
  //       );
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  const { data, error, isError, isLoading, dataUpdatedAt } = useQuery({
    queryKey: ["getEvents"],
    queryFn: getEvents,
    initialData: {
      _embedded: {
        events: [],
      },
    },
    staleTime: 5000,
    refetchInterval: 5000,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      {/* <Text>EventListScreen</Text>
      <Text>Waarde: {count}</Text> */}
      {/* <Text>{person.fName}</Text> */}
      <Text>{new Date(dataUpdatedAt).toLocaleTimeString()}</Text>
      {data._embedded.events.map((e) => (
        <Text key={e.id}>{e.name}</Text>
      ))}

      {/* <Button
        title="Verhoog"
        onPress={() => {
          //   setPerson({ ...person, fName: "Jane" });
          setCount(count + 1);
          //   setPerson()
        }}
      /> */}
    </View>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({});
