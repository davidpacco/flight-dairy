import { z } from 'zod';
import { newEntrySchema } from './utils';

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DairyEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment?: string
}

export type NonSensitiveDairyEntry = Omit<DairyEntry, 'comment'>;

export type NewDairyEntry = z.infer<typeof newEntrySchema>;