import { PropsWithChildren, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { TMEvent } from "../types";

// Stap 2 - Onze context koppelen aan onze Provider
const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<TMEvent[]>([]);

  const addEvent = (event: TMEvent) => {
    setFavorites([...favorites, event]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addEvent }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
