import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (context === null) {
    throw new Error("useFavorites must be in a FavoritesProvider");
  }

  return context;
};
