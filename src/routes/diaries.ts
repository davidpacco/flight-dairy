import express from 'express';
import dairyService from '../services/dairyService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(dairyService.getEntries());
});

router.post('/', (_req, res) => {
  res.send('posting an entry!');
});

export default router;