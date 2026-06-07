import { Router } from 'express';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';
import { createCollectionRouter } from './createCollectionRouter.js';
import { sampleData } from '../scripts/seedData.js';

export const apiRouter = Router();

apiRouter.get('/', (_req, res) => {
  res.json({
    message: 'OctoFit Tracker API',
    endpoints: ['/api/users/', '/api/teams/', '/api/activities/', '/api/leaderboard/', '/api/workouts/']
  });
});

apiRouter.use('/users', createCollectionRouter(User, sampleData.users));
apiRouter.use('/teams', createCollectionRouter(Team, sampleData.teams));
apiRouter.use('/activities', createCollectionRouter(Activity, sampleData.activities));
apiRouter.use('/leaderboard', createCollectionRouter(Leaderboard, sampleData.leaderboard));
apiRouter.use('/workouts', createCollectionRouter(Workout, sampleData.workouts));
