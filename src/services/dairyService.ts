import diaries from '../../data/entries';
import { DairyEntry } from '../../types';


const getEntries = (): DairyEntry[] => {
  return diaries;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};