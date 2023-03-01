import { Roles } from '../Enums/RolesEnums'

export interface UserType {
    name: string
    last_name: string
    email: string
    password: string
    phone: string
    role: Roles
    agency_id: string
}
