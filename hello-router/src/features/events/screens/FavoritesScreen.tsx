import { View, Text, FlatList } from "react-native";
import { useFavorites } from "../context/useFavorites";
import { useFavoritesStore } from "../store/useFavoritesStore";
import MyText from "@/shared/components/MyText";

const FavoritesScreen = () => {
  // Stap 5: Context te gebruiken
  //   Manier via de context
  //   const { favorites } = useFavorites();

  //   Manier via Zustand
  // Probeer te werken met die selectors
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <View>
      <FlatList
        data={favorites}
        ListEmptyComponent={() => <MyText>Geen favorieten!</MyText>}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
