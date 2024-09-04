import diaries from '../../data/entries';
import { DairyEntry, NewDairyEntry } from '../../types';

const getEntries = (): DairyEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): DairyEntry[] => {
  return diaries.map(({ id, date, visibility, weather }) => ({
    id,
    date,
    visibility,
    weather
  }));
};

const addEntry = (entry: NewDairyEntry) => {

  const newDairy = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry
  };

  diaries.push(newDairy);
  return newDairy;
};

const findById = (id: number): DairyEntry | undefined => {
  return diaries.find(d => d.id === id);
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry,
  findById,
};