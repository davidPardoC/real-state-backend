import { Router } from 'express'

export const HealthCheckRouter = Router()

HealthCheckRouter.get('', (_req, res) => {
    return res.json({ status: 'ok' })
})
