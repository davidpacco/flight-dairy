import { NewDairyEntry, Visibility, Weather } from "./types";
import { z } from 'zod';

export const newEntrySchema = z.object({
  date: z.string().date(),
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  comment: z.string()
});

export const toNewDairyEntry = (object: unknown): NewDairyEntry => {
  return newEntrySchema.parse(object);
};