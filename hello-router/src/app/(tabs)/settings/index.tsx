import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const GeneralSettings = () => {
  const router = useRouter();

  return (
    <View>
      <Text>GeneralSettings</Text>

      <Pressable
        className="bg-red-950 px-4 py-2 rounded-xl mx-8"
        onPress={() => {
          router.push("/modal");
        }}>
        <Text className="text-white text-center font-bold">Toon modal</Text>
      </Pressable>
    </View>
  );
};

export default GeneralSettings;
