import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    userName: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceMiles: { type: Number, default: 0 },
    points: { type: Number, required: true },
    completedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export const Activity = model('Activity', activitySchema);
