import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../globals.css";

const queryClient = new QueryClient({});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Events",
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: "Detail",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
