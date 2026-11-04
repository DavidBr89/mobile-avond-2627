import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getEventById, getInfiniteEvents } from "../api/events";

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

export const useInfiniteEvents = () => {
  const {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["events", "infinite"],
    queryFn: ({ pageParam }) => getInfiniteEvents(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const next = lastPage.page.number + 1;
      if (next < lastPage.page.totalPages) {
        return next;
      }
      return undefined;
    },
  });

  return {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
