import { create } from "zustand";
import { TMEvent } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavoritesStore {
  favorites: TMEvent[];
  isEnabled: boolean;
  addEvent: (event: TMEvent) => void;
}

// Stap 1: Zustand store aanmaken
export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      // Deel 1: Al uw states
      favorites: [],
      isEnabled: false,

      // Deel 2: Actions
      addEvent: (event) => {
        // State updaten
        set((state) => ({ favorites: [...state.favorites, event] }));
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ favorites, isEnabled }) => ({ favorites, isEnabled }),
    },
  ),
);
