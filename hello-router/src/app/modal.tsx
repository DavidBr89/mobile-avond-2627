import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { SymbolView } from "expo-symbols";
import { useRouter } from "expo-router";

const EventModal = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ paddingTop: top }}>
      <View className="flex flex-row items-center justify-between mx-4">
        <Text>EventModal</Text>
        <Pressable
          className="active:opacity-60"
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.push("/");
            }
          }}>
          <SymbolView
            size={36}
            tintColor="black"
            name={{ ios: "x.circle", android: "close" }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default EventModal;
