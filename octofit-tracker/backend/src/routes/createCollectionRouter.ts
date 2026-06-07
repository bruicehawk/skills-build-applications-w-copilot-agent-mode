import { Router } from 'express';
import type { Model } from 'mongoose';

export function createCollectionRouter(model: Model<any>) {
  const router = Router();

  router.get('/', async (_req, res, next) => {
    try {
      const records = await model.find().lean();
      res.json(records);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
