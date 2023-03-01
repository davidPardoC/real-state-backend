import { checkSchema } from 'express-validator'

const createUser = checkSchema({
    name: { isString: true },
    last_name: { isString: true },
    email: { isEmail: true },
    password: { isString: true },
    phone: { isMobilePhone: true },
    role: { not: true },
    agency_id: { isInt: true },
})

const UserValidators = { createUser }

export default UserValidators
