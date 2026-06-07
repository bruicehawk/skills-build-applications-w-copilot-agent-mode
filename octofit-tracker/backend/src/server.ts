import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDatabase } from './config/database.js';
import { apiRouter } from './routes/index.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ error: error.message });
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit Tracker API listening at ${baseUrl}`);
      console.log('Try curl http://localhost:8000/api/users/ or curl http://localhost:8000/api/activities/');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to MongoDB for octofit_db', error);
    process.exit(1);
  });
