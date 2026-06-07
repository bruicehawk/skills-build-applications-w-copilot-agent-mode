import { Router } from 'express';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';
import { createCollectionRouter } from './createCollectionRouter.js';

export const apiRouter = Router();

apiRouter.get('/', (_req, res) => {
  res.json({
    message: 'OctoFit Tracker API',
    endpoints: ['/api/users/', '/api/teams/', '/api/activities/', '/api/leaderboard/', '/api/workouts/']
  });
});

apiRouter.use('/users', createCollectionRouter(User));
apiRouter.use('/teams', createCollectionRouter(Team));
apiRouter.use('/activities', createCollectionRouter(Activity));
apiRouter.use('/leaderboard', createCollectionRouter(Leaderboard));
apiRouter.use('/workouts', createCollectionRouter(Workout));
