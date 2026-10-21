import { Image, StyleSheet, Text, View } from "react-native";
import { TMEvent } from "../types";
import { Link } from "expo-router";

interface EventCardProps {
  event: TMEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const firstImage = event.images[0];

  return (
    <Link
      className="bg-amber-200"
      href={{
        pathname: "/[id]",
        params: {
          id: event.id,
        },
      }}
      style={{ height: 300, padding: 8 }}>
      <Image
        source={{
          uri: firstImage.url,
        }}
        resizeMode="cover"
        style={{ width: "100%", height: 250 }}
      />
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "700" }}>
        {event.name}
      </Text>
    </Link>
  );
};

export default EventCard;

const styles = StyleSheet.create({});
