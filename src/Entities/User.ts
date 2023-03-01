import { Roles } from '../Enums/RolesEnums'

export default class User {
    name: string
    last_name: string
    email: string
    password?: string
    role?: Roles
    constructor({
        name,
        last_name,
        email,
        password,
        role,
    }: {
        name: string
        last_name: string
        email: string
        password?: string
        role?: Roles
    }) {
        this.name = name
        this.last_name = last_name
        this.email = email
        this.password = password
        this.role = role
    }

    public canUserCreateUser(toCreateRole: Roles): boolean {
        if (this.role === Roles.SUPER_ADMIN) {
            return true
        }
        if (this.role === Roles.AGENCY_ADMIN && toCreateRole === Roles.AGENT) {
            return true
        }
        return false
    }
}
