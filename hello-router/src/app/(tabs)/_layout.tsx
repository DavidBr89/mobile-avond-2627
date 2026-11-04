import { View, Text } from "react-native";
import React from "react";

import { Tabs } from "expo-router/tabs";
import { SymbolView } from "expo-symbols";

import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#612424" },
        tabBarActiveTintColor: "white",
      }}>
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name={{ ios: "calendar", android: "calendar_month" }}
              tintColor={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Instellingen",
          tabBarIcon: ({ color, size }) => (
            <MaterialDesignIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
