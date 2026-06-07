import dotenv from 'dotenv';
import { connectDatabase } from '../config/database.js';
import { seedDatabase } from './seedData.js';

dotenv.config();

async function seed() {
  console.log('Seed the octofit_db database with test data');
  await connectDatabase();
  await seedDatabase();

  console.log('Seed complete. Verify with curl http://localhost:8000/api/users/ and curl http://localhost:8000/api/activities/');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
