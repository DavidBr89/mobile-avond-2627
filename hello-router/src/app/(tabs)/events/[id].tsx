import EventDetailSreen from "@/features/events/screens/EventDetailSreen";
import { Stack, useLocalSearchParams } from "expo-router";

const EventDetail = () => {
  const { title } = useLocalSearchParams();

  const eventTitle = Array.isArray(title) ? title[0] : title;

  return (
    <>
      <Stack.Screen options={{ title: eventTitle }} />
      <EventDetailSreen />
    </>
  );
};

export default EventDetail;
