import { Request, Response, Router } from 'express'
import AuthController from '../Controllers/AuthController'
import { ApiErrorMiddleWare } from '../Middlewares/ApiErrorMiddleware'
import { AuthValidators } from './Validators/auth.validator'

export const AuthRouter = Router()

const authController = new AuthController()

AuthRouter.post(
    '/login',
    AuthValidators.login,
    ApiErrorMiddleWare,
    async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            const sessionTokens = await authController.login(email, password)
            res.cookie('token', sessionTokens.token, {
                httpOnly: true,
                maxAge: 86400000,
            })
            res.cookie('resfreshToken', sessionTokens.refreshToken, {
                httpOnly: true,
                maxAge: 604800000,
            })
            return res.status(200).json(sessionTokens)
        } catch (error: any) {
            return res
                .status(error.status || 500)
                .json({ message: error.message })
        }
    }
)
