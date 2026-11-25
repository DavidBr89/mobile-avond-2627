import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../globals.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FavoritesProvider from "@/features/events/context/FavoritesProvider";

const queryClient = new QueryClient({});

export default function RootLayout() {
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
