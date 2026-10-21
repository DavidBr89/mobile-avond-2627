import { useQuery } from "@tanstack/react-query";
import { getEventById } from "../api/events";

export const useEventById = (id: string | string[]) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: () => getEventById(id),
  });

  return {
    event: data,
    isLoading,
    isError,
    error,
  };
};
