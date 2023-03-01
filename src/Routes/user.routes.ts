import { Router, Request, Response } from 'express'
import { UserController } from '../Controllers/UserController'
import { ApiErrorMiddleWare } from '../Middlewares/ApiErrorMiddleware'
import { AuthMiddleware } from '../Middlewares/AuthMiddlewares'
import UserValidators from './Validators/user.validator'

export const UserRouter = Router()

const userController = new UserController()

// Create User
UserRouter.post(
    '',
    AuthMiddleware,
    UserValidators.createUser,
    ApiErrorMiddleWare,
    async (req: Request, res: Response) => {
        const { logedUser } = res.locals
        try {
            const { name, last_name, email, password, phone, role, agency_id } =
                req.body
            const newUser = await userController.createNewUser(
                {
                    name,
                    last_name,
                    email,
                    password,
                    phone,
                    role,
                    agency_id,
                },
                logedUser
            )
            return res.status(201).json(newUser)
        } catch (error: any) {
            return res.status(error.status || 500).json(error)
        }
    }
)
