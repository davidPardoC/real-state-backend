import { Router, Request, Response } from 'express'
import { UserController } from '../Controllers/UserController'
import { ApiErrorMiddleWare } from '../Middlewares/ApiErrorMiddleware'
import UserValidators from './Validators/user.validator'

export const UserRouter = Router()

const userController = new UserController()

// Create User
UserRouter.post(
    '',
    UserValidators.createUser,
    ApiErrorMiddleWare,
    async (req: Request, res: Response) => {
        try {
            const { name, last_name, email, password, phone, role, agency_id } =
                req.body
            const newUser = await userController.createNewUser({
                name,
                last_name,
                email,
                password,
                phone,
                role,
                agency_id,
            })
            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
)
