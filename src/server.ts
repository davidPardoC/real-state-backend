import { startExpressApp } from './app';
import {
  createSuperAdminUser,
  initilizeDatabase,
} from './Helpers/DatabaseHelper';

async function startServer() {
  await initilizeDatabase();
  await createSuperAdminUser();
  startExpressApp();
}

startServer();
