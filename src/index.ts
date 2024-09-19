import express from 'express';
import cors from 'cors';
import diaryRouter from './routes/diaries';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/diaries', diaryRouter);

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));