import express from 'express'
import { HealthCheckRouter } from './Routes/health-check/health-check.routes';

const app = express()
const PORT = process.env.port || 5500;

app.use('/status', HealthCheckRouter)

export function startExpressApp() {
    app.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`)
    })
}
