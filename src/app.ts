import { HealthCheckRouter } from './Routes/health-check.routes';
import express from 'express'
import { UserRouter } from './Routes/user.routes';

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
