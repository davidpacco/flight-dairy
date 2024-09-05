import express from 'express';
import dairyService from '../services/dairyService';
import { toNewDairyEntry } from '../utils';
import { z } from 'zod';

const router = express.Router();

router.get('/', (_req, res) => {
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

router.post('/', (req, res) => {
  try {
    const newDairyEntry = toNewDairyEntry(req.body);
    const addedEntry = dairyService.addEntry(newDairyEntry);
    res.json(addedEntry);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: 'unknown error' });
    }
  }
});

export default router;