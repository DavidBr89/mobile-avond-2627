import Axios from "axios";
import { TMEvent, TMResponse } from "../types";
import { ticketMasterApi } from "@/shared/api/axios";

export const getEvents = async () => {
  const { data } = await ticketMasterApi.get<TMResponse>("events.json", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
    },
  });

  return data;
};

export const getEventById = async (id: string | string[]) => {
  const { data } = await ticketMasterApi.get<TMEvent>(`events/${id}`);
  return data;
};
