import { NextFunction, Request, Response } from 'express'
import { Roles } from '../Enums/RolesEnums'

export function SuperAdminMiddleware(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    if (res.locals.logedUser.role !== Roles.SUPER_ADMIN) {
        return res.status(403).json({ message: 'Forbidden' })
    }
    return next()
}
