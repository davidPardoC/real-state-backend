import { checkSchema } from 'express-validator'
import { Roles } from '../../Enums/RolesEnums'

const createUser = checkSchema({
    name: { isString: true },
    last_name: { isString: true },
    email: { isEmail: true },
    password: { isString: true },
    phone: { isMobilePhone: true },
    role: { isIn: { options: [Object.values(Roles)] } },
    agency_id: { isInt: true },
})

const UserValidators = { createUser }

export default UserValidators
