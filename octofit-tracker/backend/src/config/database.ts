import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let memoryServer: MongoMemoryServer | undefined;
let mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (process.env.USE_STATIC_DATA === 'true') {
    console.log('Using static OctoFit data because USE_STATIC_DATA=true');
    return undefined;
  }

  if (process.env.USE_MEMORY_MONGO === 'true') {
    memoryServer = await MongoMemoryServer.create({ instance: { dbName: 'octofit_db' } });
    mongoUri = memoryServer.getUri('octofit_db');
  }

  await mongoose.connect(mongoUri);
  return mongoose.connection;
}

export { mongoUri };
