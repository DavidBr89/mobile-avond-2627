import { create } from "zustand";
import { TMEvent } from "../types";
import { z } from "zod";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { eventSchema, TMEventSchema } from "../schemas/events";

const favoritesStoreSchema = z.object({
  favorites: z.array(eventSchema),
  isEnabled: z.boolean(),
});

type FavoritesStoreTypes = z.infer<typeof favoritesStoreSchema>;
interface FavoritesStoreActions {
  addEvent: (event: TMEventSchema) => void;
}

type FavoritesStore = FavoritesStoreTypes & FavoritesStoreActions;

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
        set((state) => ({
          favorites: [...state.favorites, event],
        }));
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ favorites, isEnabled }) => ({ favorites, isEnabled }),
      merge: (persistedState, state) => {
        if (persistedState === undefined) {
          return state;
        }

        const persisted = favoritesStoreSchema.parse(persistedState);

        return { ...persisted, ...state };
      },
    },
  ),
);
