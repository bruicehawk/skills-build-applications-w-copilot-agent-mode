import { Router } from 'express';
import type { Model } from 'mongoose';

export function createCollectionRouter(model: Model<any>, fallbackRecords: unknown[] = []) {
  const router = Router();

  router.get('/', async (_req, res, next) => {
    try {
      if (process.env.USE_STATIC_DATA === 'true') {
        res.json(fallbackRecords);
        return;
      }

      const records = await model.find().lean();
      res.json(records);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
