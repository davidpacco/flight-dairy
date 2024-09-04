import diaries from '../../data/entries';
import { DairyEntry } from '../../types';

const getEntries = (): DairyEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = ():DairyEntry[] => {
  return diaries.map(({id, date, visibility, weather}) => ({
    id,
    date,
    visibility,
    weather
  }));
};

const addEntry = () => {
  return null;
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