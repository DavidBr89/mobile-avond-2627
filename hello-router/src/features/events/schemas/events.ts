import { z } from "zod";

export const imageSchema = z.object({
  ratio: z.enum(["16_9", "3_2", "4_3"]),
  url: z.url(),
  width: z.number().gte(0),
  height: z.number().gte(0),
});

type Image = z.infer<typeof imageSchema>;

export const eventSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.url(),
  images: z.array(imageSchema),
});

export type TMEventSchema = z.infer<typeof eventSchema>;

export const tmResponseSchema = z.object({
  _embedded: z.object({
    events: z.array(eventSchema),
  }),
  page: z.object({
    size: z.number(),
    totalElements: z.number(),
    totalPages: z.number(),
    number: z.number(),
  }),
});

type TMResponse = z.infer<typeof tmResponseSchema>;
