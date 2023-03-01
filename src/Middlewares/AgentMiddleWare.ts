import { NextFunction, Request, Response } from 'express'
import { Roles } from '../Enums/RolesEnums'

export function AgentMiddleware(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    if (res.locals.logedUser.role !== Roles.AGENT) {
        return res.status(403).json({ message: 'Forbidden' })
    }
    return next()
}
