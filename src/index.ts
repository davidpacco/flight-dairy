import express from 'express';
import dairyRouter from './routes/diaries';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/diaries', dairyRouter);

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));