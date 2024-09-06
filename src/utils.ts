import { Visibility, Weather } from "./types";
import { z } from 'zod';

export const NewEntrySchema = z.object({
  date: z.string().date(),
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  comment: z.string().optional()
});