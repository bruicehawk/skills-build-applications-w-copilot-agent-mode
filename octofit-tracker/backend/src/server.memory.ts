process.env.USE_MEMORY_MONGO = 'true';
process.env.AUTO_SEED = 'true';

void import('./server.js');
