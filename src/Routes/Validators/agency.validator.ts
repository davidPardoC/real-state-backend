import { checkSchema } from 'express-validator'

const createNewAgencyValidator = checkSchema({
    name: { in: ['body'], isLength: { options: { min: 1, max: 255 } } },
    email: { in: ['body'], isEmail: true },
    phone: { in: ['body'], isString: true },
    domain: { in: ['body'], optional: true },
})

const deleteAgency = checkSchema({
    id: {
        in: ['params'],
        isInt: true,
        isLength: { options: { min: 1, max: 255 } },
    },
})

const AgencyValidators = { createNewAgencyValidator, deleteAgency }

export default AgencyValidators
