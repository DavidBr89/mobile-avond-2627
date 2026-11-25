import { View, Text } from "react-native";
import React from "react";

import { Stack } from "expo-router/stack";
import { useLocalSearchParams } from "expo-router";

const EventsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#612424" },
        headerTitleStyle: { fontFamily: "ScienceGothic" },
        headerTintColor: "white",
        // headerShown: false,
      }}>
      <Stack.Screen name="index" options={{ title: "Events" }} />
      <Stack.Screen name="[id]" options={{ title: "Detail" }} />
    </Stack>
  );
};

export default EventsLayout;

// <Stack>
//   <Tabs>
//     // Tab 1: <Stack />
//     // Tab 2: <Drawer />
//   </Tabs>
// </Stack>
