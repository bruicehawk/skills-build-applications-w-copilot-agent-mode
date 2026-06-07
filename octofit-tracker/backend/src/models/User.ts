import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    grade: { type: Number, required: true },
    team: { type: String, required: true },
    totalPoints: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
