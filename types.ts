export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DairyEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment?: string
}

export type NonSensitiveDairyEntry = Omit<DairyEntry, 'comment'>;

export type NewDairyEntry = Omit<DairyEntry, 'id'>;