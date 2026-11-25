import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../globals.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FavoritesProvider from "@/features/events/context/FavoritesProvider";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { useEffect } from "react";

const queryClient = new QueryClient({});

// Tegenhouden van mijn splashscreen - zorgen dat het nog niet verdwijnt
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Font inladen a.h.v. de hook useFonts

  const [fontLoaded, fontError] = useFonts({
    ScienceGothic: require("../../assets/fonts/ScienceGothic.ttf"),
    Bebas: require("../../assets/fonts/BebasNeue.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {/* Stap 4: Provider wrappen rond uw app */}
        <FavoritesProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ headerShown: false, presentation: "modal" }}
            />
          </Stack>
        </FavoritesProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
