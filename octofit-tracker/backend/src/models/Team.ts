import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    mascot: { type: String, required: true },
    memberCount: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Team = model('Team', teamSchema);
