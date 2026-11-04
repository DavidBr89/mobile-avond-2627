import { View, Text } from "react-native";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#612424" },
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "#612424" },
        drawerActiveTintColor: "white",
      }}>
      <Drawer.Screen
        name="index"
        options={{ title: "Algemeen", drawerLabel: "Algemene instellingen" }}
      />
      <Drawer.Screen name="about" options={{ title: "Over ons" }} />
    </Drawer>
  );
};

export default DrawerLayout;
