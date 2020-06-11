import express from 'express';
import path from 'path';

export const app = express();

app.use(express.static(path.resolve('build')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('build/public', 'app.html'));
});

app.get('/about', (req, res) => {
  res.send({ message: 'Hello, about page!' });
});
