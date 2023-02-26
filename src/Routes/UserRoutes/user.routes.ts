import { Router } from 'express'

export const UserRouter = Router()

// Create User
UserRouter.post('', (_req, res) => {
    res.json({ message: 'ok' })
})
