import Axios from "axios";
import { TMEvent, TMResponse } from "../types";
import { ticketMasterApi } from "@/shared/api/axios";
import { eventSchema, tmResponseSchema } from "../schemas/events";

export const getEvents = async (signal?: AbortSignal) => {
  const { data } = await ticketMasterApi.get<unknown>("events.json", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
    },
    signal,
  });

  // Fout opgooien
  return tmResponseSchema.parse(data);

  // // Geen fout opgooien
  // const result = tmResponseSchema.safeParse(data);
  // if (result.success) {
  //   console.log(result.data);
  // } else {
  //   console.log(result.error.issues);
  // }

  // Vanaf dit punt is de inkomende data gevalideerd
  // return data;
};

export const getEventById = async (
  id: string | string[],
  signal?: AbortSignal,
) => {
  const { data } = await ticketMasterApi.get<unknown>(`events/${id}`, {
    signal,
  });
  return eventSchema.parse(data);
};

export const getInfiniteEvents = async (
  pageParam: number,
  signal?: AbortSignal,
) => {
  const { data } = await ticketMasterApi.get<unknown>("events", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
      page: pageParam,
      size: 20,
    },
    signal,
  });

  return tmResponseSchema.parse(data);
};
