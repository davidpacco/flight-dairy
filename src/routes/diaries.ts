import express, { Response } from 'express';
import dairyService from '../services/dairyService';
import { DairyEntry } from '../../types';

const router = express.Router();

router.get('/', (_req, res: Response<DairyEntry[]>) => {
  res.json(dairyService.getNonSensitiveEntries());
});

router.post('/', (_req, res) => {
  res.send('posting an entry!');
});

export default router;