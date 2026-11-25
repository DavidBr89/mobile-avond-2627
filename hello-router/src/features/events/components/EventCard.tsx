import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TMEvent } from "../types";
import { Link } from "expo-router";
import { useFavorites } from "../context/useFavorites";
import { useFavoritesStore } from "../store/useFavoritesStore";

interface EventCardProps {
  event: TMEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const firstImage = event.images[0];

  // addEvent vanuit Context
  // const { addEvent } = useFavorites();

  // addEvent vanuit Zustand store
  const addEvent = useFavoritesStore((state) => state.addEvent);

  return (
    <Link
      className="bg-amber-200"
      href={{
        pathname: "/events/[id]",
        params: {
          id: event.id,
          title: event.name,
        },
      }}
      style={{ padding: 8 }}>
      <Image
        source={{
          uri: firstImage.url,
        }}
        resizeMode="cover"
        style={{ width: "100%", height: 250 }}
      />
      <View className="flex flex-col gap-4 py-2  w-full">
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "700" }}>
          {event.name}
        </Text>
        <Pressable
          onPress={() => {
            addEvent(event);
          }}
          className="px-4 py-2 bg-amber-900 rounded-lg active:opacity-75">
          <Text className="text-center text-white">
            Voeg toe aan favorieten
          </Text>
        </Pressable>
      </View>
    </Link>
  );
};

export default EventCard;

const styles = StyleSheet.create({});
