import { NextFunction, Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import { config } from '../config'
export const UnauthorizedMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const token = authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    try {
        const verifiedToken = jwt.verify(token, config.jwt.jwt_secret as Secret)
        console.log(verifiedToken)
        return next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}
