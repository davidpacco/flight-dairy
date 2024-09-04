import express, { Response } from 'express';
import dairyService from '../services/dairyService';
import { DairyEntry } from '../../types';

const router = express.Router();

router.get('/', (_req, res: Response<DairyEntry[]>) => {
  res.json(dairyService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const dairy = dairyService.findById(Number(req.params.id));

  if (dairy) {
    res.send(dairy);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (_req, res) => {
  res.send('posting an entry!');
});

export default router;