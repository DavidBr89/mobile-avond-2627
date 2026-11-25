import { createContext } from "react";
import { TMEvent } from "../types";

interface FavoritesContext {
  favorites: TMEvent[];
  addEvent: (event: TMEvent) => void;
}

// Stap 1: Context aanmaken
export const FavoritesContext = createContext<FavoritesContext | null>(null);
