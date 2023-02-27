import express from 'express'
import { HealthCheckRouter } from '@routes/health-check/health-check.routes';
import { UserRouter } from './Routes/UserRoutes/user.routes';

export const app = express()
const PORT = process.env.port || 5500;

// Routes
app.use('/status', HealthCheckRouter)
app.use("/users", UserRouter)

export function startExpressApp() {
    app.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`)
    })
}
