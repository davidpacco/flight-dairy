import diaries from '../../data/entries';
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, visibility, weather }) => ({
    id,
    date,
    visibility,
    weather
  }));
};

const addEntry = (entry: NewDiaryEntry): DiaryEntry => {

  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry
  };

  diaries.push(newDiary);
  return newDiary;
};

const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find(d => d.id === id);
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry,
  findById,
};