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

export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry
};