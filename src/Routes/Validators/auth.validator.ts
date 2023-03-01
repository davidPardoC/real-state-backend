import { checkSchema } from 'express-validator'

const login = checkSchema({
    email: { isEmail: true },
    password: { isString: true },
})

export const AuthValidators = { login }
