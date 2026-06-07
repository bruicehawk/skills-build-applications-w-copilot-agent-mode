import dotenv from 'dotenv';
import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

dotenv.config();

async function seed() {
  console.log('Seed the octofit_db database with test data');
  await connectDatabase();

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({})
  ]);

  await Team.insertMany([
    { name: 'Blue Barracudas', mascot: 'Barracuda', memberCount: 3, totalPoints: 1420 },
    { name: 'Green Geckos', mascot: 'Gecko', memberCount: 3, totalPoints: 1335 },
    { name: 'Ruby Rockets', mascot: 'Rocket', memberCount: 2, totalPoints: 1190 }
  ]);

  await User.insertMany([
    { name: 'Avery Johnson', email: 'avery.johnson@mergington.edu', grade: 10, team: 'Blue Barracudas', totalPoints: 540 },
    { name: 'Mia Chen', email: 'mia.chen@mergington.edu', grade: 11, team: 'Green Geckos', totalPoints: 515 },
    { name: 'Noah Patel', email: 'noah.patel@mergington.edu', grade: 9, team: 'Ruby Rockets', totalPoints: 470 },
    { name: 'Sofia Garcia', email: 'sofia.garcia@mergington.edu', grade: 12, team: 'Blue Barracudas', totalPoints: 455 }
  ]);

  await Activity.insertMany([
    { userName: 'Avery Johnson', type: 'Running', durationMinutes: 35, distanceMiles: 3.4, points: 85 },
    { userName: 'Mia Chen', type: 'Strength Training', durationMinutes: 45, points: 90 },
    { userName: 'Noah Patel', type: 'Walking', durationMinutes: 50, distanceMiles: 2.6, points: 65 },
    { userName: 'Sofia Garcia', type: 'Cycling', durationMinutes: 40, distanceMiles: 7.1, points: 80 }
  ]);

  await Leaderboard.insertMany([
    { rank: 1, name: 'Avery Johnson', team: 'Blue Barracudas', points: 540 },
    { rank: 2, name: 'Mia Chen', team: 'Green Geckos', points: 515 },
    { rank: 3, name: 'Noah Patel', team: 'Ruby Rockets', points: 470 },
    { rank: 4, name: 'Sofia Garcia', team: 'Blue Barracudas', points: 455 }
  ]);

  await Workout.insertMany([
    {
      title: 'Morning Momentum',
      focus: 'Cardio',
      difficulty: 'Beginner',
      durationMinutes: 20,
      description: 'A brisk warmup, interval walk-jog blocks, and a cool-down stretch.'
    },
    {
      title: 'Core Confidence',
      focus: 'Strength',
      difficulty: 'Intermediate',
      durationMinutes: 30,
      description: 'Bodyweight strength circuit focused on planks, squats, and stability.'
    },
    {
      title: 'Team Tempo Challenge',
      focus: 'Endurance',
      difficulty: 'Advanced',
      durationMinutes: 45,
      description: 'A team-friendly pacing workout built for monthly leaderboard challenges.'
    }
  ]);

  console.log('Seed complete. Verify with curl http://localhost:8000/api/users/ and curl http://localhost:8000/api/activities/');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
