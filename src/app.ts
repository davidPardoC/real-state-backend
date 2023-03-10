import { HealthCheckRouter } from './Routes/health-check.routes';
import express, { json } from 'express';
import { UserRouter } from './Routes/user.routes';
import { AgencyRouter } from './Routes/agency.routes';
import { AuthRouter } from './Routes/auth.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { swaggerDocument } from './swagger';

export const app = express();
const PORT = process.env.port || 5500;

const corsOptions = {
  credentials: true,
  origin: true,
};
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// Routes
app.use('/status', HealthCheckRouter);
app.use('/users', UserRouter);
app.use('/agencies', AgencyRouter);
app.use('/auth', AuthRouter);

export function startExpressApp() {
  app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
  });
}
