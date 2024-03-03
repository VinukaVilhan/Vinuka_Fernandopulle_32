import { PORT, MongoURL } from './config.js';
import mongoose from 'mongoose';
import express from 'express';
import recipesRouter from './routes/recipeRoutes.js';
import cors from 'cors';

const app = express()

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {

  console.log(request);
  return response.status(200).send('welcome');
})

app.use('/recipes', recipesRouter);

mongoose
.connect(MongoURL)
.then(
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
)
